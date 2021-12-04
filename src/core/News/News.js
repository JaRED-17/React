const defaultValue = { date: '15.02.2021', html: '' };

class News {

    static fetchData = (url, init, defaultValue) => {
        return fetch(url, init)
            .then(response => response.status === 200 ? response.json() : defaultValue)
            .then(response => response)
            .catch(error => console.error(error.message));
    }

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