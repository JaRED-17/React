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
        let newsDateCreationList = ['15.02.2021', '16.02.2021', '01.05.2021', '02.07.2021', '25.11.2021'];

        return Promise.all(this.combineRequests(this.news, newsDateCreationList)).then(allResponses => allResponses)
    }

    // HELPERS

    static combineRequests = (callback, requests) => requests.map(request => callback(request))
}

export default News;