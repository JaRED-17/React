import API from '../API'

const defaultValue = { date: '15.02.2021', html: '' };

class News {

    constructor () {
        this._news = new API().constructor;
        this._allNews = new API().constructor;
        this.news = this.news.bind(this);
        this.allNews = this.allNews.bind(this);
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