import React from "react";
import translations from "./translations";

class Error extends React.Component {

    render () {
        const { hidden, errorCode } = this.props
        const language = 'ru'

        return <div className={`error ${hidden}`}>{translations[language]["app.error.code." + errorCode]}</div>
    }
}

export default Error