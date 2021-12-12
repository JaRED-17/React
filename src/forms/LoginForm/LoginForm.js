import React from "react";
import core from "../../core/Core";
import Button from "../../components/Button";
import Validation from "../../validation";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {

    state = {
        hasError: false,
        emailHasError: false,
        passwordHasError: false,
    }

    login = (data) => core.user.login.API(data).then(response => {
        console.log(response);
        this.setState({hasError: !response.success});
    })

    registration = () => this.props.history.push('/registration');

    onSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const emailValidation = Validation.email(email).success;
        const passwordValidation = Validation.password(password).success;

        this.setState({emailHasError: !emailValidation});
        this.setState({passwordHasError: !passwordValidation});

        if (!emailValidation || !passwordValidation) {
            return;
        }

        this.login({email, password});
    }

    render () {
        const { hasError, emailHasError, passwordHasError } = this.state;
        const hidden = hasError && !emailHasError && !passwordHasError ? '' : 'hidden';
        const hiddenEmail = emailHasError ? '' : 'hidden';
        const hiddenPassword = passwordHasError ? '' : 'hidden';

        return (
            <div className='LoginForm'>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className={`error ${hidden}`}>Bad credentials</div>
                    <div className="Form">
                        <label>Login</label>
                        <input type="text" name="email" ref="email" />
                        <div className={`warning ${hiddenEmail}`}>Email must be filled in</div>
                        <label>Password</label>
                        <input type="password" name="password" ref="password" />
                        <div className={`warning ${hiddenPassword}`}>Password must be filled in</div>
                    </div>

                    <div className="Buttons">
                        <Button type="submit" className="primary" name="login" />
                    </div>
                </form>

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