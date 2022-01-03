import React from 'react'
import News from '../News'
import core from '../../core/Core'
import NewsParent from '../NewsParent'
import Loading from '../Loading'
import { observer } from 'mobx-react'

@observer
class NewsByDate extends NewsParent {
    componentDidMount () {
        this.newsByDate()
    }

    componentDidUpdate (prevProps) {
        if (prevProps.date !== this.props.date) {
            this.newsByDate()
        }
    }

    get coreApi () {
        return core.news.newsByDate
    }

    newsByDate = () => {
        const { date = null } = this.props

        this.coreApi.API(date)
    }

    get newsContent () {
        const content = this.coreApi.response()

        return content ? <News type='full' content={content.html} horizontal={false} date={content.date} /> : null
    }

    render () {
        const loading = this.coreApi.loading()

        return (
            <div className='NewsByDate row'>
                {loading ? <Loading /> : this.newsContent}
            </div>
        )
    }
}

export default NewsByDate