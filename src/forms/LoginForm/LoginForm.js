import React from 'react'
import core from '../../core/Core'
import Form from '../Form'

class LoginForm extends React.Component {
    state = {
        hasError: false
    }

    login = (data) => core.user.login.API(data).then(response => {
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

export default LoginForm