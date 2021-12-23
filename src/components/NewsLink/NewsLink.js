import React from 'react'
import { Link } from 'react-router-dom'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class NewsLink extends React.Component {
    static propTypes = {
        link: PropTypes.string
    }
    messages = new Translations(translations, 'app.news.')

    render () {
        const { link } = this.props

        return (
            <div className='card-action'>
                <Link to={link}>{this.messages.getTranslations('more')}</Link>
            </div>
        )
    }
}

export default NewsLink