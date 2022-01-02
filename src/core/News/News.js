import API from '../API'

class News {
    constructor () {
        this.defaultValue = {
            date: '15.02.2021',
            html: ''
        }
        this._newsByDate = new API()
        this._allNews = new API()
        this._lastNNews = new API()
        this.newsByDate = {
            API: this.newsByDate.bind(this),
            ...this._newsByDate.getStatus()
        }
        this.allNews = {
            API: this.allNews.bind(this),
            ...this._allNews.getStatus()
        }
        this.lastNNews = {
            API: this.lastNNews.bind(this),
            ...this._lastNNews.getStatus()
        }
    }

    getInitData = () => ({
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    });

    newsByDate = (date) => this._newsByDate.call('/api/news/newsbydate', {
        ...this.getInitData(),
        body: JSON.stringify({'date': date || this.defaultValue.date})
    }, this.defaultValue)

    allNews = () => this._allNews.call('/api/news/allnews', null, [this.defaultValue])

    lastNNews = (count) => this._lastNNews.call('/api/news/lastnnews', {
        ...this.getInitData(),
        body: JSON.stringify(count)
    }, [this.defaultValue])
}

export default News