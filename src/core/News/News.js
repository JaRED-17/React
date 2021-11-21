import React from "react";

class News extends React.Component {

    static news = (newsName) => {
        const newsPath = newsName ? `media/news/${newsName}.html` : 'media/news/15.02.html'

        return fetch(newsPath).then((response) => {
            return response.status === 200 ? response.text() : ''
        }).then((html) => {
            return html;
        });
    }

    static allNews = () => {
        let newsNames = ['15.02', '02.07'];

        return Promise.all(this.combineRequests(this.news, newsNames)).then(allResponses => allResponses)
    }

    // HELPERS

    static combineRequests = (callback, requests) => {
        let combinedRequests = [];

        requests.forEach(request => {
            combinedRequests.push(callback(request))
        });

        return combinedRequests
    }
}

export default News;