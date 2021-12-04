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

    static allNews = () => {
        return fetch('/api/news/all')
            .then(response => response.json())
            .then(newsDateCreationList => Promise.all(this.combineRequests(this.news, newsDateCreationList)).then(allResponses => allResponses))
    }

    // HELPERS

    static combineRequests = (callback, requests) => requests.map(request => callback(request))
}

export default News;