import React from 'react'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class Button extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        name: PropTypes.string
    }
    messages = new Translations(translations, 'app.button.')

    render () {
        const { onClick, name } = this.props

        return (
            <button
                className='button waves-effect waves-light btn'
                onClick={onClick}
            >
                {this.messages.getTranslations(name)}
            </button>
        )
    }
}

export default Button