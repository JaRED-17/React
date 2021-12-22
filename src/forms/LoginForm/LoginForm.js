import React from 'react'
import core from '../../core/Core'
import Button from '../../components/Button'
import Validation from '../../validation'
import Field from '../../components/Field'
import Error from '../../components/Error'
import { withRouter } from 'react-router-dom'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
    static propTypes = {
        history: PropTypes.array
    }
    messages = new Translations(translations, 'app.form.login.')

    state = {
        hasError: false,
        emailHasError: false,
        passwordHasError: false
    }

    login = (data) => core.user.login.API(data).then(response => {
        console.log(response)
        this.setState({hasError: !response.success})
    })

    registration = () => this.props.history.push('/registration')

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
        const hidden = hasError && !emailHasError && !passwordHasError ? '' : 'hidden'
        const hiddenEmail = emailHasError ? '' : 'hidden'
        const hiddenPassword = passwordHasError ? '' : 'hidden'

        return (
            <div className='LoginForm'>
                <h3>{this.messages.getTranslations('title')}</h3>
                <form onSubmit={this.onSubmit}>
                    <Error hidden={hidden} errorCode={1} />
                    <div className='Form'>
                        <Field type={'text'} name={'email'} hidden={hiddenEmail} validate={Validation.email} />
                        <Field type={'password'} name={'password'} hidden={hiddenPassword} validate={Validation.password} />
                    </div>

                    <div className='Buttons'>
                        <Button type='submit' className='primary' name='login' />
                    </div>
                </form>

                <hr />

                <p>{this.messages.getTranslations('createNewAccount')}</p>
                <div className='Buttons'>
                    <Button className='secondary' name='registration' onClick={this.registration} />
                </div>
            </div>
        )
    }
}

export default withRouter(LoginForm)