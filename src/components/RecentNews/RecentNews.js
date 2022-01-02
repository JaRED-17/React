import React from 'react'
import News from '../News'
import core from '../../core/Core'
import NewsParent from '../NewsParent'
import Loading from '../Loading'

class RecentNews extends NewsParent {
    allNews = () => core.news.allNews.API().then(response => this.updateState(core.news.allNews.loading || false, response))

    get newsContent () {
        const { content } = this.state
        const { skipNews } = this.props

        return content.map(currentNews => currentNews.html && currentNews.date !== skipNews
            ? <News key={currentNews.date} type='short' content={currentNews.html} horizontal date={currentNews.date} />
            : null
        )
    }

    render () {
        const { loading } = this.state

        if (loading) this.allNews()
        return (
            <div className='RecentNews row'>
                {loading ? <Loading /> : this.newsContent}
            </div>
        )
    }
}

export default RecentNews