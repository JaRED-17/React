import React from "react";
import Button from "../Button";
import { createBrowserHistory } from 'history';
import PopupStore from "../../store";

const history = createBrowserHistory();

class Header extends React.Component {

    clickHandler = (path, isPopupOpen) => {
        isPopupOpen ? PopupStore.openPopup() : PopupStore.closePopup();
        history.push(`/${path}`);
    }

    render () {
        const { isPopupOpen } = PopupStore;

        return (
            <div className="Header">
                <div className="Logo">
                      <h1>Game news</h1>
                </div>
                <div className="Buttons">
                    <Button className="primary" name="Login" handleClick={() => this.clickHandler('login', isPopupOpen)} />
                    <Button className="secondary" name="Registration" handleClick={() => this.clickHandler('register', isPopupOpen)} />
                </div>
            </div>
        );
    }
}

export default Header;