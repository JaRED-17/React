import React from "react";
import Button from "../Button";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <div className="Logo">
                      <h1>Game news</h1>
                </div>
                <div className="Buttons">
                      <Button className="primary" name="Login" handleClick={() => history.push('/login')} />
                      <Button className="secondary" name="Registration" handleClick={() => history.push('/register')} />
                </div>
            </div>
        );
    }
}

export default Header;