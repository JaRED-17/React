import React from "react";
import core from "../../core/Core";
import Button from "../../components/Button";
import Validation from "../../validation";
import Field from "../../components/Field"
import { withRouter } from "react-router-dom";
import translations from "./translations";

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
        const language = 'ru'

        return (
            <div className='LoginForm'>
                <h3>{translations[language]['app.form.login.title']}</h3>
                <form onSubmit={this.onSubmit}>
                    <div className={`error ${hidden}`}>Bad credentials</div>
                    <div className="Form">
                        <Field type={'text'} name={'email'} hidden={hiddenEmail} />
                        <Field type={'password'} name={'password'} hidden={hiddenPassword} />
                    </div>

                    <div className="Buttons">
                        <Button type="submit" className="primary" name="login" />
                    </div>
                </form>

                <hr/>

                <p>{translations[language]['app.form.login.createNewAccount']}</p>
                <div className="Buttons">
                    <Button className="secondary" name="registration" onClick={this.registration} />
                </div>
            </div>
        )
    }
}

export default withRouter(LoginForm);