import React from "react";

class News extends React.Component {
    static news = function () {
        return fetch('/media/news/15.02.html').then((response) => {
            return response.text();
        }).then((html) => {
            return html;
        });
    }
}

export default News;