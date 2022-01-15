import React from 'react'
import withCore from '../../helpers/withCore'
import Form from '../Form'
import PropTypes from 'prop-types'

class MyAccountForm extends React.Component {
    static propTypes = {
        core: PropTypes.object
    }
    state = {
        hasError: false,
        userData: {}
    }

    get coreUser () {
        const { core } = this.props
        return core.user
    }

    getUserData = (user) => this.coreUser.data.API(user)

    saveUserData = (data) => this.coreUser.save.API(data)

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

export default withCore(MyAccountForm)