import React from 'react';
import {Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Login from '../Login';
import Register from '../Register';

const history = createBrowserHistory();

class Routes extends React.Component {
    render () {
        return (
            <Router history={history}>
                <Route path="/login" component={Login} />
                <Route path="/Register" component={Register} />
            </Router>
        )
    }
}

export default Routes;