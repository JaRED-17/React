import React from "react";
import Popup from '../Popup';
import RegisterForm from '../RegisterForm';

class Register extends React.Component {

    render() {
        return (
            <Popup>
                <RegisterForm />
            </Popup>
        )
    }
}

export default Register;