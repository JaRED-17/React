import React from 'react'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class Error extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        errorCode: PropTypes.number
    }
    messages = new Translations(translations, 'app.error.code.')

    render () {
        const { show = false, errorCode } = this.props

        return <div className={`error ${show ? '' : 'hidden'}`}>{this.messages.getTranslations(errorCode)}</div>
    }
}

export default Error