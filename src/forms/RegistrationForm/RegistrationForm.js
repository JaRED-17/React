import React from 'react'
import core from '../../core/Core'
import Form from '../Form'

class RegistrationForm extends React.Component {
    state = {
        hasError: false
    }

    registration = (data) => core.user.registration.API(data).then(response => {
        console.log(response)
        this.setState({hasError: !response.success})
    })

    render () {
        const { hasError } = this.state
        const fields = [
            {id: 1, type: 'text', name: 'email'},
            {id: 2, type: 'password', name: 'password'}
        ]

        return <Form fields={fields} name='registration' formClassName='RegistrationForm' api={this.registration} hasError={hasError} />
    }
}

export default RegistrationForm