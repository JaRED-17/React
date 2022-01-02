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
        return <h4>{this.messages.getTranslations('noComments')}</h4>
    }

    Comments = () => {
        const { comments } = this.state

        return comments.map(comment => <Comment key={comment.id} answers={comment.answers} content={comment.text} user={comment.user} date={comment.date} />)
    }

    componentDidUpdate (prevProps) {
        if (prevProps.params.date !== this.props.params.date) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
                loading: true,
                comments: {}
            })
        }
    }

    render () {
        const { params } = this.props
        const { loading } = this.state

        if (loading) this.getComments({date: params.date, id: params.id})
        return (
            <div className='Comments'>
                {loading ? this.emptyComments() : this.Comments()}
            </div>
        )
    }
}

export default Comments