import React from "react";
import News from "../News"
import core from "../../core/Core";
import NewsParent from "../NewsParent";

class LastNNews extends NewsParent {

    lastNNews = (count) => core.news.lastNNews.API(count).then(response => this.updateState(core.news.lastNNews.loading || false, response))

    get newsContent () {
        const { content } = this.state;
        const { skipNews } = this.props;

        return this.content(content.map(currentNews => {
            return currentNews.html && currentNews.date !== skipNews
                ? <News key={currentNews.date} type='short' content={currentNews.html} horizontal={true} date={currentNews.date} />
                : null}),
            'LastNNews');
    }

    render () {
        const { isLoading } = this.state;

        if (isLoading) this.lastNNews({count: 3});
        return isLoading ? this.content() : this.newsContent;
    }
}

export default LastNNews;