import React from 'react'
import LoginForm from '../../forms/LoginForm'
import Button from '../../components/Button'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import translations from './translations'
import Translations from '../../translations'

class LoginPage extends React.Component {
    static propTypes = {
        history: PropTypes.object
    }
    messages = new Translations(translations, 'app.page.login.')

    registration = () => this.props.history.push('/registration')

    render () {
        return (
            <div className='LoginPage'>
                <h3>{this.messages.getTranslations('title')}</h3>
                <LoginForm />
                <hr />
                <p>{this.messages.getTranslations('createNewAccount')}</p>
                <div className='Buttons'>
                    <Button className='secondary' name='registration' onClick={this.registration} />
                </div>
            </div>
        )
    }
}

export default withRouter(LoginPage)