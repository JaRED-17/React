import React from "react";
import News from "../News"
import Core from '../../core/Core'

class OneNews extends React.Component {

    state = {
        isLoading: true,
        content: ''
    };

    updateState = (loading, content) => {
        this.setState({
            isLoading: loading,
            content: content
        })
    }

    news = (date = null) => Core.News(date).then(response => this.updateState(false, response))

    content = News => <div className="OneNews row">{News}</div>

    get newsContent () {
        const { content } = this.state;

        return this.content(<News content={content.html} horizontal={false} date={content.date} />)
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