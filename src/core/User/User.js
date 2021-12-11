import API from '../API'

class User {

    constructor () {
        this._login = new API().constructor;
        this._registration = new API().constructor;
        this.login = this.login.bind(this);
        this.registration = this.registration.bind(this);
    }

    login = () => this._login.call('/api/user/login');

    registration = () => this._registration.call('/api/user/registration');
}

export default User;