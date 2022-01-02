import React from 'react'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class Comment extends React.Component {
    static propTypes = {
        answers: PropTypes.number,
        content: PropTypes.string,
        user: PropTypes.string,
        date: PropTypes.string
    }
    messages = new Translations(translations, 'app.comment.')

    render () {
        const { answers, content, user, date } = this.props

        return (
            <div className='Comment'>
                <div className='Comment-header'>
                    <div className='avatar' />
                    <div>
                        <div className='userName'>{user}</div>
                        <time className='date'>{date}</time>
                    </div>
                </div>
                <div className='Comment-content'>
                    {content}
                </div>
                <div className='Comment-answer'>
                    <a href='#'>{this.messages.getTranslations('answer')}</a>
                </div>
                <details className='Comment-answers'>
                    <summary>{this.messages.getTranslations('answers', {count: answers})}</summary>
                    <p>More info about the details.</p>
                </details>
            </div>
        )
    }
}

export default Comment