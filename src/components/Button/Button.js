import React from "react";

class Button extends React.Component {
    render () {
        const { className, handleClick } = this.props
        const classes = `button ${className}`

        return (
            <button 
                className={classes}
                onClick={handleClick}
            >
                {this.props.name}
            </button>
        );
    }
}

export default Button;