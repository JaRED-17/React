import API from '../API'

class User {

    constructor () {
        this._login = new API();
        this._registration = new API();
        this.login = {
            API: this.login.bind(this),
            status: this._login.getStatus()
        };
        this.registration = {
            API: this.registration.bind(this),
            status: this._registration.getStatus()
        };
    }

    login = (data) => this._login.call('/api/user/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    });

    registration = (data) => this._registration.call('/api/user/registration', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    });
}

export default User;