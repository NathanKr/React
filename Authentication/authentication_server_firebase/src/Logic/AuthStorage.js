class AuthStorage{
    static key = 'keyAuth';
    
    
    static getAuth(){
        // --- localStorage can not save object properly so i first transfor it to json string and now i parse it back to object 
        const item = window.localStorage.getItem(this.key);
        const auth = (item && (item !== "undefined")) ? JSON.parse(item) : item;
        console.log(auth);
        return auth;
    }

    static hasAuthTimeExpired() {
        const auth = this.getAuth();
        let minutesRemaining = -1;

        if(auth){
            const minutesRemaining = (Date.now() - auth.keyExpiredTime)/1000/60;
            console.log(minutesRemaining);
        }

        return ( !auth || !auth.keyExpiredTime || (minutesRemaining >= 0)); 
    }

    static init(setAuthState)
    {
        this.setAuthState = setAuthState;
        if(this.hasAuthTimeExpired()){
            this.setAuth(null);
        }
        else{
            this.setAuth(this.getAuth);
        }
    }

    static setAuth(auth){
        let extendedAuth = {...auth};

        // --- i prefer to put it here because thats the only way i can hide it from user of AuthStorage
        const intervalMs = 60*1000;// --- check every minute
        // --- i prefer to put it here because thats the only way i can hide it from user of AuthStorage
        const intervalHandler = () =>{
            console.log('timer handler is invoked');
            if(this.hasAuthTimeExpired()){
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

        if(auth != null){
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