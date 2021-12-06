import React from "react";
import News from "../News"
import Core from "../../core/Core";
import NewsParent from "../NewsParent";

class RecentNews extends NewsParent {

    allNews = () => Core.allNews().then(response => this.updateState(Core.newsStatus.loading || false, response))

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

        // eslint-disable-next-line no-unused-expressions
        isLoading ? this.allNews() : null;
        return isLoading ? this.content() : this.newsContent;
    }
}

export default RecentNews;