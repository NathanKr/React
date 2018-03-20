class AuthStorage{
    static key = 'keyAuth';

    static setAuth(auth){
        localStorage.setItem(this.key, auth);
        console.log(auth);
    }

    static getAuth(){
        localStorage.getItem(this.key);
    }

    static removeAuth(){
        localStorage.removeItem(this.key);
    }
}

export default AuthStorage;