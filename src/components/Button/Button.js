import React from "react";

class Button extends React.Component {
  render() {
    const classes = `button ${this.props.className}`

    return (
      <button className={classes} onClick={this.props.handleClick}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;