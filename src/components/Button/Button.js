import React from 'react'
import translations from './translations'
import PropTypes from 'prop-types'

class Button extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        name: PropTypes.string
    }

    render () {
        const { onClick, name } = this.props
        const language = 'ru'

        return (
            <button
                className='button waves-effect waves-light btn'
                onClick={onClick}
            >
                {translations[language][name] || name}
            </button>
        )
    }
}

export default Button