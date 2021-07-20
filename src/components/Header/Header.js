import React from "react";
import Button from "../Button";
import PopupStore from "../../store"

class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <div className="Logo">
                      <h1>Game news</h1>
                </div>
                <div className="Buttons">
                      <Button className="primary" name="Login" handleClick={PopupStore.openPopup} />
                      <Button className="secondary" name="Registration" handleClick={PopupStore.openPopup} />
                </div>
            </div>
        );
    }
}

export default Header;