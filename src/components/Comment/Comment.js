import React from 'react'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class Comment extends React.Component {
    static propTypes = {
        answers: PropTypes.number,
        content: PropTypes.string
    }
    messages = new Translations(translations, 'app.comment.')

    render () {
        const { answers, content } = this.props

        return (
            <div className='Comment'>
                <div className='Comment-header'>
                    <div className='avatar' />
                    <div>
                        <div className='userName'>User Name</div>
                        <div className='date'>01.01.2021</div>
                    </div>
                </div>
                <div className='Comment-content'>
                    {content}
                </div>
                <div className='Comment-answers'>
                    <p>{this.messages.getTranslations('answers', {count: answers})}</p>
                    <a href='#'>{this.messages.getTranslations('answer')}</a>
                </div>
            </div>
        )
    }
}

export default Comment