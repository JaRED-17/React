class News {

    static news = (date) => {
        return fetch('/api/news/onenews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({'date': date || '15.02.2021'})
        }).then(response => response.json()).then(response => response);
    }

    static allNews = () => fetch('/api/news/allnews').then(response => response.json()).then(response => response);
}

export default News;