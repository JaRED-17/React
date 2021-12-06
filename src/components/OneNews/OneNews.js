import React from "react";
import News from "../News";
import Core from "../../core/Core";
import NewsParent from "../NewsParent";

class OneNews extends NewsParent {

    news = (date = null) => Core.News(date).then(response => this.updateState(Core.newsStatus.loading || false, response))

    get newsContent () {
        const { content } = this.state;

        return this.content(<News type='full' content={content.html} horizontal={false} date={content.date} />, 'OneNews')
    }

    render () {
        const { isLoading } = this.state;
        const { date } = this.props;

        // eslint-disable-next-line no-unused-expressions
        isLoading ? this.news(date) : null;
        return isLoading ? this.content() : this.newsContent;
    }
}

export default OneNews;