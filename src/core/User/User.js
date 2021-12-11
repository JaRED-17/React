import API from '../API'

class User {

    constructor () {
        this._login = new API();
        this._registration = new API();
        this.login = this.login.bind(this);
        this.registration = this.registration.bind(this);
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