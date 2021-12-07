import React from "react";
import Core from "../../core/Core";

class NewsParent extends React.Component {

    state = {
        isLoading: true,
        content: ''
    };

    get status () {
        return Core.newsStatus()
    }

    updateState = (loading, content) => {
        this.setState({
            isLoading: loading,
            content: content
        })
    }

    content = (News, className) => <div className={`${className} row`}>{News}</div>
}

export default NewsParent;