import React from 'react'
import Warning from '../Warning'
import translations from './translations'
import PropTypes from 'prop-types'

class Field extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        name: PropTypes.string,
        hidden: PropTypes.string
    }

    render () {
        const { type, name, hidden } = this.props
        const language = 'ru'

        return (
            <div className={`Field ${name}`}>
                <label>{translations[language][name]}</label>
                <input type={type} name={name} ref={name} />
                <Warning hidden={hidden} field={translations[language][name]} warningCode={1} />
            </div>
        )
    }
}

export default Field