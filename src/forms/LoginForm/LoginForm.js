import React from 'react'
import withCore from '../../helpers/withCore'
import Form from '../Form'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
    static propTypes = {
        core: PropTypes.object
    }
    state = {
        hasError: false
    }

    get coreUser () {
        const { core } = this.props
        return core.user
    }

    login = (data) => this.coreUser.login.API(data).then(response => {
        console.log(response)

        if (response.success) {
            window.localStorage.setItem('isLoggedIn', true)
            window.location.href = '/'
        }
        this.setState({hasError: !response.success})
    })

    render () {
        const { hasError } = this.state
        const fields = [
            {id: 1, type: 'text', name: 'email'},
            {id: 2, type: 'password', name: 'password'}
        ]

        return <Form fields={fields} name='login' formClassName='LoginForm' api={this.login} hasError={hasError} />
    }
}

export default withCore(LoginForm)