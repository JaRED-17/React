import API from '../API'

class User {
    constructor () {
        this._login = new API()
        this._registration = new API()
        this._data = new API()
        this._save = new API()
        this.login = {
            API: this.login.bind(this),
            ...this._login.getStatus()
        }
        this.registration = {
            API: this.registration.bind(this),
            ...this._registration.getStatus()
        }
        this.data = {
            API: this.data.bind(this),
            ...this._data.getStatus()
        }
        this.save = {
            API: this.save.bind(this),
            ...this._save.getStatus()
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

    data = (user) => this._data.call('/api/user/data', this.getInitData(user))

    save = (data) => this._save.call('/api/user/save', this.getInitData(data))

    isLoggedIn = () => window.localStorage.getItem('isLoggedIn') === 'true'
}

export default User