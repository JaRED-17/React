import React from 'react'
import withCore from '../../helpers/withCore'
import Form from '../Form'
import PropTypes from 'prop-types'

class RegistrationForm extends React.Component {
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

    registration = (data) => this.coreUser.registration.API(data).then(response => {
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

export default withCore(RegistrationForm)