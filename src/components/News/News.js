import React from "react";

class News extends React.Component {
    render () {
        return (
            <div className="News" dangerouslySetInnerHTML={{ __html: this.props.content }} />
        )
    }
}

export default News;