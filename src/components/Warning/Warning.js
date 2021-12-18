import React from "react";
import translations from "./translations";

class Warning extends React.Component {
    render () {
        const { hidden, field, warningCode } = this.props
        const language = 'ru'

        return <div className={`warning ${hidden}`}>{translations[language]["app.error.warning.code." + warningCode].replace('{0}', field)}</div>
    }
}

export default Warning