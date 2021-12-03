import React from "react";
import News from "../News"
import Core from '../../core/Core'

class RecentNews extends React.Component {

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

    allNews = () => Core.allNews().then(response => this.updateState(false, response))

    content = News => <div className="RecentNews row">{News}</div>

    get newsContent () {
        const { content } = this.state;
        const { skipNews } = this.props;

        return this.content(content.map(currentNews => currentNews.html && currentNews.date !== skipNews ? <News content={currentNews.html} horizontal={true} date={currentNews.date} /> : null))
    }

    render () {
        const { isLoading } = this.state;

        // eslint-disable-next-line no-unused-expressions
        isLoading ? this.allNews() : null;
        return isLoading ? this.content() : this.newsContent;
    }
}

export default RecentNews;