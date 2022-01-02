import React from 'react'

class NewsParent extends React.Component {
    state = {
        loading: true,
        content: ''
    }

    updateState = (loading, content) => {
        this.setState({
            loading: loading,
            content: content
        })
    }
}

export default NewsParent