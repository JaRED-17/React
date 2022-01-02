import React from 'react'
import News from '../News'
import core from '../../core/Core'
import NewsParent from '../NewsParent'
import Loading from '../Loading'

class NewsByDate extends NewsParent {
    news = (date = null) => core.news.newsByDate.API(date).then(response => this.updateState(core.news.newsByDate.loading() || false, response))

    get newsContent () {
        const { content } = this.state

        return content ? <News type='full' content={content.html} horizontal={false} date={content.date} /> : null
    }

    componentDidUpdate (prevProps) {
        if (prevProps.date !== this.props.date) {
            this.updateState(true, '')
        }
    }

    render () {
        const { loading } = this.state
        const { date } = this.props

        if (loading) this.news(date)
        return (
            <div className='NewsByDate row'>
                {loading ? <Loading /> : this.newsContent}
            </div>
        )
    }
}

export default NewsByDate