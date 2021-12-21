import React from 'react'
import PropTypes from 'prop-types'

class NewsImage extends React.Component {
    static propTypes = {
        image: PropTypes.string,
        date: PropTypes.string
    }

    render () {
        const { image, date } = this.props

        return (
            <div className='card-image'>
                <img src={`media/news/${date}/Images/${image}`} alt='logo' />
            </div>
        )
    }
}

export default NewsImage