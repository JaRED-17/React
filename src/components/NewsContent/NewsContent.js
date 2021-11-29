import React from "react";

class NewsContent extends React.Component {
    render () {
        const { content } = this.props;

        return (
            <div className="card-content" dangerouslySetInnerHTML={{ __html: content }} />
        )
    }
}

export default NewsContent;