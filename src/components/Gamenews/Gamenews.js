import React from "react";
import News from "../News"
import Core from '../../core/Core'

class Gamenews extends React.Component {

    state = {
        isLoading: true,
        content: ''
    };

    get news () {
        Core.News().then((html) => {
            this.setState({
                isLoading: false,
                content: html
            })
        })
    }

    get allNews () {
        return Core.allNews().then(allNews => {
            this.setState({
                isLoading: false,
                content: allNews
            })
        })
    }

    get content () {
        return <div className="Gamenews"></div>
    }

    get newsContent () {
        return typeof this.state.content === 'string' ? (
            <div className="Gamenews">
                <News content={this.state.content} />
            </div>
        ) : (
            <div className="Gamenews">
                {
                    this.state.content.map(html => {
                        console.log('1',html)
                        return <News content={html} />
                    })
                }
            </div>
        )
    }

    render () {
        const {isLoading} = this.state;
        // eslint-disable-next-line no-unused-expressions
        isLoading ? this.allNews : null;
        return isLoading ? this.content : this.newsContent;
    }
}

export default Gamenews;