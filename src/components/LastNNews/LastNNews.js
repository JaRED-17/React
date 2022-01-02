import React from 'react'
import News from '../News'
import core from '../../core/Core'
import NewsParent from '../NewsParent'
import Loading from '../Loading'
import { observer } from 'mobx-react'

@observer
class LastNNews extends NewsParent {
    componentDidMount () {
        this.lastNNews({count: 3})
    }

    get coreApi () {
        return core.news.lastNNews
    }

    lastNNews = (count) => this.coreApi.API(count)

    get newsContent () {
        const content = this.coreApi.response()
        const { skipNews } = this.props

        return !content ? null : content.map(currentNews => currentNews.html && currentNews.date !== skipNews
            ? <News key={currentNews.date} type='short' content={currentNews.html} horizontal date={currentNews.date} />
            : null
        )
    }

    render () {
        const loading = this.coreApi.loading()

        return (
            <div className='LastNNews row'>
                {loading ? <Loading /> : this.newsContent}
            </div>
        )
    }
}

export default LastNNews