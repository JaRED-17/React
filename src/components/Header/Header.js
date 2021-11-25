import React from "react";
import Button from "../Button";
import { withRouter } from "react-router-dom";
import PopupStore from "../../store";

class Header extends React.Component {

    clickHandler = (path) => {
        PopupStore.openPopup()
        this.props.history.push(`/${path}`);
    }

    render () {
        return (
            <div className="Header">
                <div className="Logo">
                      <h1><a href='/'>Game news</a></h1>
                </div>
                <div className="Buttons">
                    <Button className="primary" name="Login" handleClick={() => this.clickHandler('login')} />
                    <Button className="secondary" name="Registration" handleClick={() => this.clickHandler('register')} />
                </div>
            </div>
        );
    }
}

export default withRouter(Header);