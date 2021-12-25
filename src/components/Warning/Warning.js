import React from 'react'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class Warning extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        field: PropTypes.string,
        warningCode: PropTypes.number
    }
    messages = new Translations(translations, 'app.error.warning.code.')

    render () {
        const { show = false, field, warningCode } = this.props

        return <div className={`warning ${show ? '' : 'hidden'}`}>{this.messages.getTranslations(warningCode, { fieldName: field })}</div>
    }
}

export default Warning