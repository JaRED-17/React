import React from "react";
import Button from "../Button";

class RegistrationForm extends React.Component {

    register = () => console.log('register')

    render () {
        return (
            <div className='RegistrationForm'>
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

export default RegistrationForm;