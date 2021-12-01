import React from "react";
import Button from "../Button";
import { withRouter } from "react-router-dom";
import PopupStore from "../../store";
import { Link } from 'react-router-dom';

class Header extends React.Component {

    clickHandler = (path) => {
        PopupStore.openPopup()
        this.props.history.push(`/${path}`);
    }

    render () {
        return (
            <div className="Header">
                <div className="Logo">
                      <h1><Link to={"/"}>Game news</Link></h1>
                </div>
                <div className="Buttons">
                    <Button className="primary" name="Login" handleClick={() => this.clickHandler('login')} />
                    <Button className="secondary" name="Registration" handleClick={() => this.clickHandler('registration')} />
                </div>
            </div>
        );
    }
}

export default withRouter(Header);