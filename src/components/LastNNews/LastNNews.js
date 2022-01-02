import React from 'react'
import News from '../News'
import core from '../../core/Core'
import NewsParent from '../NewsParent'
import Loading from '../Loading'

class LastNNews extends NewsParent {
    lastNNews = (count) => core.news.lastNNews.API(count).then(response => this.updateState(core.news.lastNNews.loading || false, response))

    get newsContent () {
        const { content } = this.state
        const { skipNews } = this.props

        return content.map(currentNews => currentNews.html && currentNews.date !== skipNews
            ? <News key={currentNews.date} type='short' content={currentNews.html} horizontal date={currentNews.date} />
            : null
        )
    }

    render () {
        const { isLoading } = this.state

        if (isLoading) this.lastNNews({count: 3})
        return (
            <div className='LastNNews row'>
                {isLoading ? <Loading /> : this.newsContent}
            </div>
        )
    }
}

export default LastNNews