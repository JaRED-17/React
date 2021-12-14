import React from "react";
import translations from "./translations";

class Button extends React.Component {
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
        );
    }
}

export default Button;