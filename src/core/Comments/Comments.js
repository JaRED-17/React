import API from '../API'

class Comments {
    constructor () {
        this._comments = new API()
        this.comments = {
            API: this.comments.bind(this),
            ...this._comments.getStatus()
        }
    }

    comments = (data) => this._comments.call('/api/comments', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    })
}

export default Comments