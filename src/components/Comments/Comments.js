import React from 'react'
import withCore from './../withCore'
import Comment from '../Comment'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

@observer
class Comments extends React.Component {
    static propTypes = {
        params: PropTypes.object,
        core: PropTypes.object
    }
    messages = new Translations(translations, 'app.comments.')

    componentDidMount () {
        this.getComments()
    }

    componentDidUpdate (prevProps) {
        if (prevProps.params.date !== this.props.params.date) {
            this.getComments()
        }
    }

    get coreApi () {
        const { core } = this.props
        return core.comments.comments
    }

    getComments = () => {
        const { params } = this.props

        this.coreApi.API({date: params.date, id: params.id})
    }

    emptyComments = () => {
        return <h4>{this.messages.getTranslations('noComments')}</h4>
    }

    Comments = () => {
        const comments = this.coreApi.response()

        return Object.keys(comments).length !== 0
            ? comments.map(comment => <Comment key={comment.id} answers={comment.answers} content={comment.text} user={comment.user} date={comment.date} />)
            : this.emptyComments()
    }

    render () {
        const loading = this.coreApi.loading()

        return (
            <div className='Comments'>
                {loading ? this.emptyComments() : this.Comments()}
            </div>
        )
    }
}

export default withCore(Comments)