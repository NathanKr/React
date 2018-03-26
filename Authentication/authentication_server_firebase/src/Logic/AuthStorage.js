class AuthStorage{
    static key = 'keyAuth';
    
    
    static getAuth(){
        // --- localStorage can not save object properly so i first transfor it to json string and now i parse it back to object 
        const item = window.localStorage.getItem(this.key);
        const auth = (item && (item !== "undefined")) ? JSON.parse(item) : item;
        console.log('auth : ',auth);
        return auth;
    }

    static isAuthValid(auth) {
        let minutesRemainingForExpiredAuth = -1;

        if(auth && auth.hasOwnProperty('keyExpiredTime')){
            minutesRemainingForExpiredAuth = Math.round((auth.keyExpiredTime - Date.now())/1000/60);
            console.log('minutes remaining for expired auth : '+minutesRemainingForExpiredAuth);
        }


       const bIsValid = (minutesRemainingForExpiredAuth > 0);
       console.log('is auth valid : ' + bIsValid);
        
        return bIsValid; 
    }

    static init(setAuthState)
    {
        this.setAuthState = setAuthState;
        const auth = this.getAuth();
        const authIsNew = false;

        if(this.isAuthValid(auth)){

            this.setAuth(auth,authIsNew);
        }
        else{
            this.setAuth(null,authIsNew);
        }
    }

    static setAuth(auth , authIsNew){
        let extendedAuth = {...auth};

        const intervalMs = 60*1000;// --- check every minute
        // --- i prefer to put it here because thats the only way i can hide it from user of AuthStorage
        const intervalHandler = () =>{
            console.log('timer handler is invoked');
            if(!this.isAuthValid(this.getAuth())){
                console.log('Auth time has expired , timer is removed');
                // --- remove timer
                window.clearInterval(this.privatetimerHandle);
                // --- call upper level
                this.setAuthState(null);
            }
        }

        // start timer (regradless on bSetNewExpiredTime)
        window.clearInterval(this.privatetimerHandle);// --- first remove previouse timer
        this.privatetimerHandle = window.setInterval(intervalHandler, intervalMs);

        if(authIsNew){
            const nExpiredTime = Date.now() + auth.expiresIn*1000;// in milisecond since 1970
            const objAdd = {keyExpiredTime : nExpiredTime};
            extendedAuth = {...extendedAuth  , ...objAdd};
            console.log(extendedAuth);
        }

        // --- localStorage can not save object properly so i first transfor it to json string 
        const jsonStringExtendedAuth = JSON.stringify(extendedAuth);
        window.localStorage.setItem(this.key, jsonStringExtendedAuth);
        this.setAuthState(extendedAuth);
    }

    

    static removeAuth(){
        localStorage.removeItem(this.key);
        this.setAuthState(null);
        //remove timer
        window.clearInterval(this.privatetimerHandle);
    }
}

export default AuthStorage;