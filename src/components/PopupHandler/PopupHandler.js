import React from "react";
import Login from '../Login';
import Registration from '../Registration';

class PopupHandler extends React.Component {

    content () {
        return (
            <div className='Popups'>
                <Login />
                <Registration />
            </div>
        )
    }

    render () {
        return this.content
    }
}

export default PopupHandler;