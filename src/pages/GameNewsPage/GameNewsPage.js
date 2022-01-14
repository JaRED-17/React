import React from 'react'
import NewsByDate from '../../components/NewsByDate'
import RecentNews from '../../components/RecentNews'
import NewComment from '../../components/NewComment'
import Comments from '../../components/Comments'
import LastNNews from '../../components/LastNNews'
import translations from './translations'
import Translations from '../../translations'

class GameNewsPage extends React.Component {
    get urlParams () {
        const urlParams = window.location.search
        const params = urlParams ? urlParams.replace('?', '') : null

        return params ? this.parseUrlParams(params) : null
    }
    messages = new Translations(translations, 'app.page.gameNews.')

    parseUrlParams = (params) => {
        let result = {}

        params.split('&').forEach(param => param.split('=').reduce((key, value) => { result[key] = value }))
        return result
    }

    newsByDate = (urlParams) => {
        return (
            <>
                <NewsByDate date={urlParams.date || '01.05.2021'} />
                <NewComment />
                <Comments params={urlParams} />
                <h3>{this.messages.getTranslations('lastNews')}</h3>
                <RecentNews skipNews={urlParams.date} />
            </>
        )
    }

    render () {
        const { urlParams } = this

        return (
            <div className='newsPage'>
                {urlParams ? this.newsByDate(urlParams) : <LastNNews />}
            </div>
        )
    }
}

export default GameNewsPage