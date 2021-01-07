import React from "react";
import './Button.scss';

class Button extends React.Component {
  render() {
    return (
      <button className="Button" onClick={this.props.handleClick}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;