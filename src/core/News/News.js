import API from '../API'

const defaultValue = { date: '15.02.2021', html: '' };

class News {

    constructor () {
        this._news = new API();
        this._allNews = new API();
        this.news = {
            API: this.news.bind(this),
            status: this._news.getStatus()
        }
        this.allNews = {
            API: this.allNews.bind(this),
            status: this._allNews.getStatus()
        }
    }

    news = (date) => this._news.call('/api/news/onenews', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({'date': date || defaultValue.date})
    }, defaultValue);

    allNews = () => this._allNews.call('/api/news/allnews', null, [defaultValue]);
}

export default News;