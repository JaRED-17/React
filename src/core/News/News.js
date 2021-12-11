import API from '../API'

const defaultValue = { date: '15.02.2021', html: '' };

class News {

    constructor () {
        this._newsByDate = new API();
        this._allNews = new API();
        this.newsByDate = {
            API: this.newsByDate.bind(this),
            ...this._newsByDate.getStatus()
        }
        this.allNews = {
            API: this.allNews.bind(this),
            ...this._allNews.getStatus()
        }
    }

    newsByDate = (date) => this._newsByDate.call('/api/news/newsbydate', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({'date': date || defaultValue.date})
    }, defaultValue);

    allNews = () => this._allNews.call('/api/news/allnews', null, [defaultValue]);
}

export default News;