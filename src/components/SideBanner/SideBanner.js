import React from "react";

class SideBanner extends React.Component {
    render () {
        return (
            <div className={`SideBanner ${this.props.class}`}></div>
        );
    }
}

export default SideBanner;