class News {

    static news = (date) => {
        const newsPath = date ? `media/news/${date}.html` : 'media/news/15.02.2021.html'

        return fetch(newsPath).then(response => response.status === 200 ? response.text() : '').then(html => {
            return {
                html,
                date
            }
        })
    }

    static allNews = () => fetch('/api/news/allnews').then(response => response.json()).then(response => response);
}

export default News;