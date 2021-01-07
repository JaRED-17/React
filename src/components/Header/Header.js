import React from "react";
import './Header.scss';
import Button from "../Button/Button";

class Header extends React.Component {
  login() {
    console.log('login');
  }

  registration() {
    console.log('registration');
  }

  render() {
    return (
      <div className="Header">
        <div className="Logo">
          <h1>Game news</h1>
        </div>        
        <div className="Buttons">
          <Button name="Login" handleClick={this.login} />
          <Button name="Registration" handleClick={this.registration} />
        </div>
      </div>
    );
  }
}

export default Header;