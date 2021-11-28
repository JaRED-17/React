import React from "react";
import Core from "../../core/Core";
import Button from "../Button";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {

    login = () => Core.Login().then(response => console.log(response))

    registration = () => this.props.history.push('/registration');

    render () {
        return (
            <div className='LoginForm'>
                <div className="Form">
                    <label>Login</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="password"/>
                </div>

                <div className="Buttons">
                    <Button className="primary" name="Login" handleClick={this.login} />
                    <Button className="secondary" name="Registration" handleClick={this.registration} />
                </div>
            </div>

        )
    }
}

export default withRouter(LoginForm);