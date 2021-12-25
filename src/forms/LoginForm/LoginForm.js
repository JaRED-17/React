import React from 'react'
import core from '../../core/Core'
import Button from '../../components/Button'
import Validation from '../../validation'
import Field from '../../components/Field'
import Error from '../../components/Error'

class LoginForm extends React.Component {
    state = {
        hasError: false,
        emailHasError: false,
        passwordHasError: false
    }

    login = (data) => core.user.login.API(data).then(response => {
        console.log(response)

        if (response.success) {
            window.localStorage.setItem('isLoggedIn', true)
            window.location.href = '/'
        }
        this.setState({hasError: !response.success})
    })

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

        this.login({email, password})
    }

    render () {
        const { hasError, emailHasError, passwordHasError } = this.state
        const showError = hasError && !emailHasError && !passwordHasError

        return (
            <div className='LoginForm'>
                <form onSubmit={this.onSubmit}>
                    <Error show={showError} errorCode={1} />
                    <div className='Form'>
                        <Field type={'text'} name={'email'} showWarning={emailHasError} />
                        <Field type={'password'} name={'password'} showWarning={passwordHasError} />
                    </div>

                    <div className='Buttons'>
                        <Button type='submit' className='primary' name='login' />
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm