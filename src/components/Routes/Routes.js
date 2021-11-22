import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from '../Login';
import Register from '../Register';
import { observer } from "mobx-react"
import PopupStore from "../../store";

class Routes extends React.Component {

    get content () {
        return (
            <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
            </Switch>
        )
    }

    render () {
        const { isPopupOpen } = PopupStore;

        return isPopupOpen ? this.content : null;
    }
}

export default observer(Routes);