import React from "react";
import Login from '../Login';
import Register from '../Register';

class PopupHandler extends React.Component {

    content () {
        return (
            <div className='Popups'>
                <Login />
                <Register />
            </div>
        )
    }

    render () {
        return this.content
    }
}

export default PopupHandler;