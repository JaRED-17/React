import React from "react";

class Sidebanner extends React.Component {
    render () {
        return (
            <div className={`Sidebanner ${this.props.class}`}></div>
        );
    }
}

export default Sidebanner;