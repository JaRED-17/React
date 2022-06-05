import API from '../API'

class Settings {
    constructor () {
        this._settings = new API()
        this._fields = new API()
        this.settings = {
            API: this.settings.bind(this),
            ...this._settings.getStatus()
        }
        this.fields = {
            API: this.fields.bind(this),
            ...this._fields.getStatus()
        }
    }

    settings = () => this._settings.call('/api/settings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    })

    fields = (form) => this._fields.call('/api/settings/fields', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({form: form})
    })
}

export default Settings