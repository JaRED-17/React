import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class NewsLink extends React.Component {
    static propTypes = {
        link: PropTypes.string
    }

    render () {
        const { link } = this.props

        return (
            <div className='card-action'>
                <Link to={link}>Подробнее</Link>
            </div>
        )
    }
}

export default NewsLink