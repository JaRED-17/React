import React from 'react'
import core from '../../core/Core'
import Comment from '../Comment'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class Comments extends React.Component {
    static propTypes = {
        params: PropTypes.object
    }
    state = {
        loading: true,
        comments: {}
    }
    messages = new Translations(translations, 'app.comments.')

    getComments = (data) => core.comments.comments.API(data).then(response => {
        if (Object.keys(response).length !== 0) {
            this.setState({
                loading: false,
                comments: response
            })
        }
    })

    emptyComments = () => {
        return (
            <div>
                <h4>{this.messages.getTranslations('noComments')}</h4>
            </div>
        )
    }

    Comments = () => {
        const { comments } = this.state

        return (
            <div>
                {comments.map(comment => <Comment key={comments.id} answers={comment.answers} content={comment.text} user={comment.user} date={comment.date} />)}
            </div>
        )
    }

    render () {
        const { params } = this.props
        const { loading } = this.state

        if (loading) this.getComments({date: params.date, id: params.id})
        return loading ? this.emptyComments() : this.Comments()
    }
}

export default Comments