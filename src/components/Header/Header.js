import React from "react";
import Button from "../Button";
import { withRouter } from "react-router-dom";
import PopupStore from "../../store";
import { Link } from 'react-router-dom';

class Header extends React.Component {

    onClick = (path) => {
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
                    <Button className="primary" name="Login" onClick={() => this.onClick('login')} />
                    <Button className="secondary" name="Registration" onClick={() => this.onClick('registration')} />
                </div>
            </div>
        );
    }
}

export default withRouter(Header);