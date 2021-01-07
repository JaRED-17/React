import React from "react";
import './Sidebanner.scss';

class Sidebanner extends React.Component {

  render() {
    return (
        <div className={`Sidebanner ${this.props.class}`}></div>
    );
  }
}

export default Sidebanner;