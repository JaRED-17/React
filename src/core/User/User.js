import API from '../API'

class User {
    constructor () {
        this._login = new API()
        this._registration = new API()
        this.login = {
            API: this.login.bind(this),
            ...this._login.getStatus()
        }
        this.registration = {
            API: this.registration.bind(this),
            ...this._registration.getStatus()
        }
    }

    getInitData = (data) => ({
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    })

    login = (data) => this._login.call('/api/user/login', this.getInitData(data))

    registration = (data) => this._registration.call('/api/user/registration', this.getInitData(data))

    isLoggedIn = () => window.localStorage.getItem('isLoggedIn') === 'true'
}

export default User