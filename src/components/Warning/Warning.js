import React from 'react'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class Warning extends React.Component {
    static propTypes = {
        hidden: PropTypes.string,
        field: PropTypes.string,
        warningCode: PropTypes.number
    }
    messages = new Translations(translations, 'app.error.warning.code.')

    render () {
        const { hidden, field, warningCode } = this.props

        return <div className={`warning ${hidden}`}>{this.messages.getTranslations(warningCode).replace('{0}', field)}</div>
    }
}

export default Warning