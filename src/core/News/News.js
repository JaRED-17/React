import API from '../API'

const defaultValue = { date: '15.02.2021', html: '' };

class News extends API {

    static news = (date) => {
        return this.fetchData('/api/news/onenews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({'date': date || defaultValue.date})
        }, defaultValue);
    }

    static allNews = () => this.fetchData('/api/news/allnews', null, [defaultValue]);
}

export default News;