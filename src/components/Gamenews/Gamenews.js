import React from "react";
import News from "../News"
import Core from '../../core/Core'

class Gamenews extends React.Component {

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

    news = (newsDateCreation = null) => Core.News(newsDateCreation).then(html => this.updateState(false, html))

    allNews = () => Core.allNews().then(allNews => this.updateState(false, allNews))

    content = News => <div className="Gamenews row">{News}</div>

    get newsContent () {
        return typeof this.state.content === 'string'
            ? this.content(<News content={this.state.content} />)
            : this.content(this.state.content.map(html => html ? <News content={html} /> : null))
    }

    render () {
        const { isLoading } = this.state;
        const { allNews, newsDateCreation } = this.props;
        
        // eslint-disable-next-line no-unused-expressions
        isLoading ? allNews ? this.allNews() : this.news(newsDateCreation) : null;
        return isLoading ? this.content() : this.newsContent;
    }
}

export default Gamenews;