import React from "react";
import News from "../News";
import core from "../../core/Core";
import NewsParent from "../NewsParent";

class OneNews extends NewsParent {

    news = (date = null) => core.news.news(date).then(response => this.updateState(false, response))

    get newsContent () {
        const { content } = this.state;

        return this.content(<News type='full' content={content.html} horizontal={false} date={content.date} />, 'OneNews')
    }

    render () {
        const { isLoading } = this.state;
        const { date } = this.props;

        if (isLoading) this.news(date);
        return isLoading ? this.content() : this.newsContent;
    }
}

export default OneNews;