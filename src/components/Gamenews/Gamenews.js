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

    news = (newsDateCreation = null) => Core.News(newsDateCreation).then(response => this.updateState(false, response))

    allNews = () => Core.allNews().then(response => this.updateState(false, response))

    content = News => <div className="Gamenews row">{News}</div>

    get newsContent () {
        const { content } = this.state;

        return typeof content.newsHtml === 'string'
            ? this.content(<News content={content.newsHtml} newsDateCreation={content.newsDateCreation} />)
            : this.content(content.map(currentNews => currentNews.newsHtml ? <News content={currentNews.newsHtml} newsDateCreation={currentNews.newsDateCreation} /> : null))
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