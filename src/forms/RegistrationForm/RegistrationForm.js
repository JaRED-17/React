import React from "react";
import Button from "../../components/Button";
import core from "../../core/Core";
import { withRouter } from "react-router-dom";

class RegistrationForm extends React.Component {

    login = () => this.props.history.push('/login');

    registration = () => core.user.registration({login: 'user', password: 'password'}).then(response => console.log(response))

    render () {
        return (
            <div className='RegistrationForm'>
                <h3>Registration</h3>
                <div className="Form">
                    <label>Login</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="password"/>
                </div>

                <div className="Buttons">
                    <Button className="secondary" name="Registration" onClick={this.registration} />
                </div>

                <hr/>

                <p>If you have account you can login</p>
                <div className="Buttons">
                    <Button className="secondary" name="Login" onClick={this.login} />
                </div>
            </div>

        )
    }
}

export default  withRouter(RegistrationForm);