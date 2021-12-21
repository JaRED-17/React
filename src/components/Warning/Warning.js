import React from 'react'
import translations from './translations'
import PropTypes from 'prop-types'

class Warning extends React.Component {
    static propTypes = {
        hidden: PropTypes.string,
        field: PropTypes.string,
        warningCode: PropTypes.number
    }

    render () {
        const { hidden, field, warningCode } = this.props
        const language = 'ru'

        return <div className={`warning ${hidden}`}>{translations[language]['app.error.warning.code.' + warningCode].replace('{0}', field)}</div>
    }
}

export default Warning