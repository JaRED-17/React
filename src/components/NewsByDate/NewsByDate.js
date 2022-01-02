import React from 'react'
import News from '../News'
import core from '../../core/Core'
import NewsParent from '../NewsParent'
import Loading from '../Loading'

class NewsByDate extends NewsParent {
    news = (date = null) => core.news.newsByDate.API(date).then(response => this.updateState(core.news.newsByDate.loading || false, response))

    get newsContent () {
        const { content } = this.state

        return <News type='full' content={content.html} horizontal={false} date={content.date} />
    }

    componentDidUpdate (prevProps) {
        if (prevProps.date !== this.props.date) {
            this.updateState(true, '')
        }
    }

    render () {
        const { isLoading } = this.state
        const { date } = this.props

        if (isLoading) this.news(date)
        return (
            <div className='NewsByDate row'>
                {isLoading ? <Loading /> : this.newsContent}
            </div>
        )
    }
}

export default NewsByDate