import React from 'react'
import {Button as ButtonUI} from '@material-ui/core'
import PropTypes from 'prop-types'

class Button extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        name: PropTypes.string,
        classes: PropTypes.string,
        variant: PropTypes.string,
        color: PropTypes.string
    }
    static defaultProps = {
        name: '',
        classes: '',
        variant: 'contained',
        color: 'primary'
    }

    render () {
        const { onClick, name, classes, variant, color } = this.props

        return (
            <ButtonUI
                variant={variant}
                color={color}
                className={classes}
                onClick={onClick}
            >
                {name}
            </ButtonUI>
        )
    }
}

export default Button