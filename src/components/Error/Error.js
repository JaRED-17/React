import React from 'react'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class Error extends React.Component {
    static propTypes = {
        hidden: PropTypes.string,
        errorCode: PropTypes.number
    }
    messages = new Translations(translations, 'app.error.code.')

    render () {
        const { hidden, errorCode } = this.props

        return <div className={`error ${hidden}`}>{this.messages.getTranslations(errorCode)}</div>
    }
}

export default Error