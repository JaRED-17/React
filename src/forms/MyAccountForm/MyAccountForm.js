import React from 'react'
import core from '../../core/Core/Core'
import Form from '../Form'

class MyAccountForm extends React.Component {
    state = {
        hasError: false,
        userData: {}
    }

    getUserData = (user) => core.user.data.API(user)

    saveUserData = (data) => core.user.save.API(data)

    populateUserData = () => {
        this.getUserData({user: 'user1'}).then(response => {
            if (Object.keys(response).length !== 0) {
                this.setState({userData: response})
            }
        })
    }

    componentDidMount () {
        this.populateUserData()
    }

    render () {
        const { hasError, userData } = this.state
        const fields = [
            {id: 1, type: 'text', name: 'firstName', value: userData.firstName || ''},
            {id: 2, type: 'text', name: 'lastName', value: userData.lastName || ''},
            {id: 3, type: 'text', name: 'email', value: userData.email || ''}
        ]

        return <Form fields={fields} name='save' formClassName='MyAccountForm' api={this.saveUserData} hasError={hasError} />
    }
}

export default MyAccountForm