import React from "react";
import Popup from '../Popup';
import LoginForm from '../LoginForm';

class Login extends React.Component {

    render() {
        return (
            <Popup>
                <LoginForm />
            </Popup>
        )
    }
}

export default Login;