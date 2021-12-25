import React from 'react'
import RegistrationForm from '../../forms/RegistrationForm'
import Button from '../../components/Button'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import translations from './translations'
import Translations from '../../translations'

class RegistrationPage extends React.Component {
    static propTypes = {
        history: PropTypes.object
    }
    messages = new Translations(translations, 'app.page.registration.')

    login = () => this.props.history.push('/login')

    render () {
        return (
            <div className='RegistrationPage'>
                <h3>{this.messages.getTranslations('title')}</h3>
                <RegistrationForm />
                <hr />
                <p>{this.messages.getTranslations('userHasAccount')}</p>
                <div className='Buttons'>
                    <Button className='secondary' name='login' onClick={this.login} />
                </div>
            </div>
        )
    }
}

export default withRouter(RegistrationPage)