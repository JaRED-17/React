import React from "react";

class News extends React.Component {

    static news = (newsName) => {
        const newsPath = newsName ? `media/news/${newsName}.html` : 'media/news/15.02.html'

        return fetch(newsPath).then(response => response.status === 200 ? response.text() : '').then(html => html)
    }

    static allNews = () => {
        let newsNames = ['15.02', '02.07'];

        return Promise.all(this.combineRequests(this.news, newsNames)).then(allResponses => allResponses)
    }

    // HELPERS

    static combineRequests = (callback, requests) => requests.map(request => callback(request))
}

export default News;