import React from "react";
import Popup from '../Popup';
import LoginForm from '../../Forms/LoginForm';

class Login extends React.Component {
    render () {
        return (
            <Popup>
                <LoginForm />
            </Popup>
        )
    }
}

export default Login;