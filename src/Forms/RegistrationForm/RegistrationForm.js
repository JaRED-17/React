import React from "react";
import Button from "../../components/Button";

class RegistrationForm extends React.Component {

    registration = () => console.log('registration')

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
                    <Button className="secondary" name="Registration" handleClick={this.registration} />
                </div>
            </div>

        )
    }
}

export default RegistrationForm;