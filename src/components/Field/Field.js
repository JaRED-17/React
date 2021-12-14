import React from "react";
import translations from "./translations";

class Field extends React.Component {

    render () {
        const { type, name, hidden } = this.props
        const language = 'ru'

        return (
            <div className={`Field ${name}`}>
                <label>{translations[language][name]}</label>
                <input type={type} name={name} ref={name} />
                <div className={`warning ${hidden}`}>{translations[language][name]} must be filled in</div>
            </div>
        )
    }
}

export default Field;