import API from '../API'

class Settings {
    constructor () {
        this._settings = new API()
        this.settings = {
            API: this.settings.bind(this),
            ...this._settings.getStatus()
        }
    }

    settings = () => this._settings.call('/api/settings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    })
}

export default Settings