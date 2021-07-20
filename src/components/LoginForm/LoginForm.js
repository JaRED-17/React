import React from "react";
import PopupStore from "../../store";
import Core from "../../core/Core";
import Button from "../Button";

class LoginForm extends React.Component {

    login () {

        Core.Login().then((response) => {
            console.log(response)
        })
    }

    register () {
        PopupStore.openPopup()
        Core.Register().then((response) => {
            console.log(response)
        })
    }

    render() {
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
                    <Button className="secondary" name="Registration" handleClick={this.register} />
                </div>
            </div>

        )
    }
}

export default LoginForm;