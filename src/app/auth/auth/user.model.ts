export class User {
    constructor(
        public email : string,
        public userId : string, 
        private _token : string, 
        private _expiry : Date){

    }

    get token(){

        if(!this._expiry || new Date() > this._expiry ){
            return null;
        }
        return this._token
    }
}