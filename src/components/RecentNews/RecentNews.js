import React from 'react'
import News from '../News'
import withCore from '../../helpers/withCore'
import NewsParent from '../NewsParent'
import Loading from '../Loading'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

@observer
class RecentNews extends NewsParent {
    static propTypes = {
        core: PropTypes.object
    }

    componentDidMount () {
        this.allNews()
    }

    get coreApi () {
        const { core } = this.props
        return core.news.allNews
    }

    allNews = () => this.coreApi.API()

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
            <div className='RecentNews row'>
                {loading ? <Loading /> : this.newsContent}
            </div>
        )
    }
}

export default withCore(RecentNews)