import React from 'react'
import translations from './translations'
import PropTypes from 'prop-types'

class Error extends React.Component {
    static propTypes = {
        hidden: PropTypes.string,
        errorCode: PropTypes.number
    }

    render () {
        const { hidden, errorCode } = this.props
        const language = 'ru'

        return <div className={`error ${hidden}`}>{translations[language]['app.error.code.' + errorCode]}</div>
    }
}

export default Error