import React from 'react'
import { Switch, Route } from 'react-router-dom'
import core from '../../core/Core'

/* Pages */
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import RegistrationPage from '../../pages/RegistrationPage'
import GameNewsPage from '../../pages/GameNewsPage'
import NotFoundPage from '../../pages/NotFoundPage'
import MyAccountPage from '../../pages/MyAccountPage'

class Routes extends React.Component {
    isLoggedIn = () => core.user.isLoggedIn()

    render () {
        return (
            <Switch>
                <Route path='/' component={HomePage} exact />
                {this.isLoggedIn()
                    ? <Route path='/my-account' component={MyAccountPage} exact />
                    : <>
                        <Route path='/login' component={LoginPage} exact />
                        <Route path='/registration' component={RegistrationPage} exact />
                    </>
                }
                <Route path='/news' component={GameNewsPage} exact />
                <Route component={NotFoundPage} />
            </Switch>
        )
    }
}

export default Routes