import React from "react";
import translations from "./translations";

class Field extends React.Component {

    render () {
        const { type, name, hidden } = this.props

        console.log(translations[name]);

        return (
            <>
                <label>{translations[name]}</label>
                <input type={type} name={name} ref={name} />
                <div className={`warning ${hidden}`}>{translations[name]} must be filled in</div>
            </>
        )
    }
}

export default Field;