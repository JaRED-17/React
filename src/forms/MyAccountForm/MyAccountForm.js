import React from 'react'
import Error from '../../components/Error'
import Field from '../../components/Field'
import Button from '../../components/Button'
import core from '../../core/Core/Core'
import Validation from '../../validation'

class MyAccountForm extends React.Component {
    state = {
        userData: {},
        firstNameHasError: false,
        lastNameHasError: false,
        emailHasError: false
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

    onSubmit = (event) => {
        event.preventDefault()
        const firstName = event.target.firstName.value
        const lastName = event.target.lastName.value
        const email = event.target.email.value
        const firstNameValidation = Validation.firstName(firstName).success
        const lastNameValidation = Validation.lastName(lastName).success
        const emailValidation = Validation.email(email).success

        this.setState({firstNameHasError: !firstNameValidation})
        this.setState({lastNameHasError: !lastNameValidation})
        this.setState({emailHasError: !emailValidation})

        if (!firstNameValidation || !lastNameValidation || !emailValidation) {
            return
        }

        this.saveUserData({firstName, lastName, email})
    }

    render () {
        const { userData, firstNameHasError, lastNameHasError, emailHasError } = this.state

        return (
            <div className='MyAccountForm'>
                <form onSubmit={this.onSubmit}>
                    <Error show={false} errorCode={1} />
                    <div className='Form'>
                        <Field type={'text'} name={'firstName'} showWarning={firstNameHasError} value={userData.firstName || ''} />
                        <Field type={'text'} name={'lastName'} showWarning={lastNameHasError} value={userData.lastName || ''} />
                        <Field type={'text'} name={'email'} showWarning={emailHasError} value={userData.email || ''} />
                    </div>

                    <div className='Buttons'>
                        <Button type='submit' className='primary' name='save' />
                    </div>
                </form>
            </div>
        )
    }
}

export default MyAccountForm