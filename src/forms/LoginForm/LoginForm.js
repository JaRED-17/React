import React from "react";
import core from "../../core/Core";
import Button from "../../components/Button";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {

    state = {
        hasError: false
    }

    login = (data) => core.user.login.API(data).then(response => {
        console.log(response);
        this.setState({hasError: !response.success});
    })

    onSubmit = (event) => {
        event.preventDefault()
        this.login({
            login: event.target.login.value,
            password: event.target.password.value
        });
    }

    registration = () => this.props.history.push('/registration');

    render () {
        const { hasError } = this.state;
        const hidden = hasError ? '' : 'hidden';

        return (
            <div className='LoginForm'>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className={`error ${hidden}`}>Bad credentials</div>
                    <div className="Form">
                        <label>Login</label>
                        <input type="text" name="login" ref="login" />
                        <label>Password</label>
                        <input type="password" name="password" ref="password" />
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