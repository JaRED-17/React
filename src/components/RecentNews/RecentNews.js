import React from "react";
import News from "../News"
import core from "../../core/Core";
import NewsParent from "../NewsParent";

class RecentNews extends NewsParent {

    allNews = () => core.news.allNews().then(response => this.updateState(false, response))

    get newsContent () {
        const { content } = this.state;
        const { skipNews } = this.props;

        return this.content(content.map(currentNews => {
            return currentNews.html && currentNews.date !== skipNews
                ? <News key={currentNews.date} type='short' content={currentNews.html} horizontal={true} date={currentNews.date} />
                : null}),
            'RecentNews');
    }

    render () {
        const { isLoading } = this.state;

        if (isLoading) this.allNews();
        return isLoading ? this.content() : this.newsContent;
    }
}

export default RecentNews;