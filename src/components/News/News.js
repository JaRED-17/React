import React from 'react'
import NewsImage from '../NewsImage'
import NewsContent from '../NewsContent'
import NewsLink from '../NewsLink'
import PropTypes from 'prop-types'

class News extends React.Component {
    static propTypes = {
        content: PropTypes.string,
        horizontal: PropTypes.bool,
        date: PropTypes.string,
        type: PropTypes.string
    }

    render () {
        const { content, horizontal, date, type } = this.props

        return (
            <div className='News col s12'>
                <div className='row'>
                    <div className='col s12 m12'>
                        <div className={`card ${horizontal ? 'horizontal' : ''}`}>
                            {type === 'short' ? <NewsImage image={`${date}.jpg`} date={date} /> : null}
                            <div className='card-stacked'>
                                <NewsContent content={content} />
                                {type === 'short' ? <NewsLink link={`/news?date=${date}&id=1`} /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News