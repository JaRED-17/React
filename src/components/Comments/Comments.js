import React from 'react'
import Comment from '../Comment'
import translations from './translations'
import Translations from '../../translations'

class Comments extends React.Component {
    messages = new Translations(translations, 'app.comments.')

    emptyComments = () => {
        return (
            <div>
                <h1>{this.messages.getTranslations('noComments')}</h1>
            </div>
        )
    }

    Comments = () => {
        return (
            <div>
                <Comment answers={10} content={'Comment 1'} />
                <Comment answers={4} content={'Comment 2'} />
            </div>
        )
    }

    render () {
        const comments = 1

        return comments === 0 ? this.emptyComments() : this.Comments()
    }
}

export default Comments