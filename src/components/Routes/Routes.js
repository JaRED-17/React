import React from 'react'
import { Switch, Route } from 'react-router-dom'
import withCore from '../../helpers/withCore'

/* Pages */
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import RegistrationPage from '../../pages/RegistrationPage'
import GameNewsPage from '../../pages/GameNewsPage'
import NotFoundPage from '../../pages/NotFoundPage'
import MyAccountPage from '../../pages/MyAccountPage'
import PropTypes from 'prop-types'

class Routes extends React.Component {
    static propTypes = {
        core: PropTypes.object
    }

    get coreUser () {
        const { core } = this.props
        return core.user
    }

    isLoggedIn = () => this.coreUser.isLoggedIn()

    render () {
        return (
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/my-account' component={this.isLoggedIn() ? MyAccountPage : NotFoundPage} exact />
                <Route path='/login' component={this.isLoggedIn() ? NotFoundPage : LoginPage} exact />
                <Route path='/registration' component={this.isLoggedIn() ? NotFoundPage : RegistrationPage} exact />
                <Route path='/news' component={GameNewsPage} exact />
                <Route component={NotFoundPage} />
            </Switch>
        )
    }
}

export default withCore(Routes)