import React from "react";

class Button extends React.Component {
    render () {
        const { className, handleClick } = this.props
        const classes = `button ${className}`

        console.log(className)
        console.log(handleClick)

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