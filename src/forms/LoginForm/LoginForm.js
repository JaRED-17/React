import React from "react";
import Core from "../../core/Core";
import Button from "../../components/Button";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {

    login = () => Core.Login().then(response => console.log(response))

    registration = () => this.props.history.push('/registration');

    render () {
        return (
            <div className='LoginForm'>
                <h3>Login</h3>
                <div className="Form">
                    <label>Login</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="password"/>
                </div>

                <div className="Buttons">
                    <Button className="primary" name="Login" onClick={this.login} />
                </div>

                <hr/>

                <p>Or you can create a new account</p>
                <div className="Buttons">
                    <Button className="secondary" name="Registration" onClick={this.registration} />
                </div>
            </div>
        )
    }
}

export default withRouter(LoginForm);