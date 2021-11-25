import React from "react";

class Button extends React.Component {
    render () {
        const { handleClick } = this.props

        return (
            <button 
                className='button waves-effect waves-light btn'
                onClick={handleClick}
            >
                {this.props.name}
            </button>
        );
    }
}

export default Button;