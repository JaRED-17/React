import React from "react";

class NewsParent extends React.Component {

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

    content = (News, className) => <div className={`${className} row`}>{News}</div>
}

export default NewsParent;