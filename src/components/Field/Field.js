import React from 'react'
import Warning from '../Warning'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class Field extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        name: PropTypes.string,
        hidden: PropTypes.string
    }
    messages = new Translations(translations, 'app.field.')

    render () {
        const { type, name, hidden } = this.props

        return (
            <div className={`Field ${name}`}>
                <label>{this.messages.getTranslations(name)}</label>
                <input type={type} name={name} ref={name} />
                <Warning hidden={hidden} field={this.messages.getTranslations(name)} warningCode={1} />
            </div>
        )
    }
}

export default Field