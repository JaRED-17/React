import React from "react";
import Button from "../../components/Button";
import core from "../../core/Core";
import Field from "../../components/Field"
import { withRouter } from "react-router-dom";

class RegistrationForm extends React.Component {

    login = () => this.props.history.push('/login');

    registration = (data) => core.user.registration.API(data).then(response => console.log(response))

    onSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        this.registration({email, password});
    }

    render () {
        return (
            <div className='RegistrationForm'>
                <h3>Registration</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="Form">
                        <Field type={'text'} name={'email'} hidden={'hidden'} />
                        <Field type={'password'} name={'password'} hidden={'hidden'} />
                    </div>

                    <div className="Buttons">
                        <Button type="submit" className="secondary" name="registration" />
                    </div>
                </form>

                <hr/>

                <p>If you have account you can login</p>
                <div className="Buttons">
                    <Button className="secondary" name="login" onClick={this.login} />
                </div>
            </div>

        )
    }
}

export default  withRouter(RegistrationForm);