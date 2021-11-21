import React from "react";
import News from "../News"
import Core from '../../core/Core'

class Gamenews extends React.Component {

    state = {
        isLoading: true,
        content: ''
    };

    news = () => Core.News().then(html => {
        this.setState({
            isLoading: false,
            content: html
        })
    })

    allNews = () => Core.allNews().then(allNews => {
        this.setState({
            isLoading: false,
            content: allNews
        })
    })

    content = (News) => <div className="Gamenews">{News}</div>

    get newsContent () {
        return typeof this.state.content === 'string'
            ? this.content(<News content={this.state.content} />)
            : this.content(this.state.content.map(html => html ? <News content={html} /> : null))
    }

    render () {
        const {isLoading} = this.state;
        // eslint-disable-next-line no-unused-expressions
        isLoading ? this.allNews() : null;
        return isLoading ? this.content() : this.newsContent;
    }
}

export default Gamenews;