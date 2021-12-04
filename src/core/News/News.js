const defaultValue = { date: '15.02.2021', html: '' };

class News {

    static news = (date) => {
        return fetch('/api/news/onenews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({'date': date || defaultValue.date})
        })
            .then(response => response.status === 200 ? response.json() : defaultValue)
            .then(response => response)
            .catch(error => console.error(error.message));
    }

    static allNews = () => fetch('/api/news/allnews')
        .then(response => response.status === 200 ? response.json() : [defaultValue])
        .then(response => response)
        .catch(error => console.error(error.message));

}

export default News;