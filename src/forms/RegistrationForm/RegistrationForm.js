import React from 'react'
import core from '../../core/Core'
import Button from '../../components/Button'
import Validation from '../../validation'
import Field from '../../components/Field'

class RegistrationForm extends React.Component {
    state = {
        emailHasError: false,
        passwordHasError: false
    }

    registration = (data) => core.user.registration.API(data).then(response => console.log(response))

    onSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const emailValidation = Validation.email(email).success
        const passwordValidation = Validation.password(password).success

        this.setState({emailHasError: !emailValidation})
        this.setState({passwordHasError: !passwordValidation})

        if (!emailValidation || !passwordValidation) {
            return
        }

        this.registration({email, password})
    }

    render () {
        const { emailHasError, passwordHasError } = this.state
        const hiddenEmail = emailHasError ? '' : 'hidden'
        const hiddenPassword = passwordHasError ? '' : 'hidden'

        return (
            <div className='RegistrationForm'>
                <form onSubmit={this.onSubmit}>
                    <div className='Form'>
                        <Field type={'text'} name={'email'} hidden={hiddenEmail} />
                        <Field type={'password'} name={'password'} hidden={hiddenPassword} />
                    </div>

                    <div className='Buttons'>
                        <Button type='submit' className='secondary' name='registration' />
                    </div>
                </form>
            </div>
        )
    }
}

export default RegistrationForm