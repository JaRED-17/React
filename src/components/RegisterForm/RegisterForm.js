import React from "react";
import Button from "../Button";

class RegisterForm extends React.Component {

    register = () => console.log('register')

    render () {
        return (
            <div className='RegisterForm'>
                <div className="Form">
                    <label>Login</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="password"/>
                </div>

                <div className="Buttons">
                    <Button className="secondary" name="Registration" handleClick={this.register} />
                </div>
            </div>

        )
    }
}

export default RegisterForm;