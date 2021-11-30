import React from "react";

class News extends React.Component {

    static news = (date) => {
        const newsPath = date ? `media/news/${date}.html` : 'media/news/15.02.html'

        return fetch(newsPath).then(response => response.status === 200 ? response.text() : '').then(html => {
            return {
                html,
                date
            }
        })
    }

    static allNews = () => {
        let newsDateCreationList = ['15.02', '16.02', '01.05', '02.07', '25.11'];

        return Promise.all(this.combineRequests(this.news, newsDateCreationList)).then(allResponses => allResponses)
    }

    // HELPERS

    static combineRequests = (callback, requests) => requests.map(request => callback(request))
}

export default News;