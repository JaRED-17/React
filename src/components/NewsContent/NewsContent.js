import React from 'react'
import PropTypes from 'prop-types'

class NewsContent extends React.Component {
    static propTypes = {
        content: PropTypes.string
    }

    render () {
        const { content } = this.props

        return (
            <div className='card-content' dangerouslySetInnerHTML={{ __html: content }} />
        )
    }
}

export default NewsContent