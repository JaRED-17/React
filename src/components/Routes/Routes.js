import React from 'react';
import { Switch, Route } from 'react-router-dom'

/* Pages */
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage';

class Routes extends React.Component {
    render () {
        return (
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/login" component={LoginPage} exact />
                <Route path="/registration" component={RegistrationPage} exact />
            </Switch>
        )
    }
}

export default Routes;