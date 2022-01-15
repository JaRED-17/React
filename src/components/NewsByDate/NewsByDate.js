import React from 'react'
import News from '../News'
import withCore from '../../helpers/withCore'
import NewsParent from '../NewsParent'
import Loading from '../Loading'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

@observer
class NewsByDate extends NewsParent {
    static propTypes = {
        core: PropTypes.object
    }

    componentDidMount () {
        this.newsByDate()
    }

    componentDidUpdate (prevProps) {
        if (prevProps.date !== this.props.date) {
            this.newsByDate()
        }
    }

    get coreApi () {
        const { core } = this.props
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

export default withCore(NewsByDate)