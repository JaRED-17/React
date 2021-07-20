import React from "react";
import Button from "../Button";
import PopupStore from "../../store"
import Core from "../../core/Core"

class Header extends React.Component {
    login () {
        PopupStore.openPopup()
        Core.Login().then((response) => {
            console.log(response)
        })
    }

    register () {
        PopupStore.openPopup()
        Core.Register().then((response) => {
            console.log(response)
        })
    }

    render() {
        return (
            <div className="Header">
                <div className="Logo">
                      <h1>Game news</h1>
                </div>
                <div className="Buttons">
                      <Button className="primary" name="Login" handleClick={this.login} />
                      <Button className="secondary" name="Registration" handleClick={this.register} />
                </div>
            </div>
        );
    }
}

export default Header;