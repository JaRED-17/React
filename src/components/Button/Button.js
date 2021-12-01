import React from "react";

class Button extends React.Component {
    render () {
        const { onClick } = this.props

        return (
            <button 
                className='button waves-effect waves-light btn'
                onClick={onClick}
            >
                {this.props.name}
            </button>
        );
    }
}

export default Button;