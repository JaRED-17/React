import React from 'react'
import Button from '../Button'
import { withRouter, Link } from 'react-router-dom'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'
import withCore from '../../helpers/withCore'

class Header extends React.Component {
    static propTypes = {
        core: PropTypes.object,
        history: PropTypes.object
    }
    messages = new Translations(translations, 'app.header.')

    isLoggedIn = () => this.props.core.user.isLoggedIn()

    onClick = (path) => this.props.history.push(`/${path}`)

    logout = () => {
        window.localStorage.setItem('isLoggedIn', false)
        window.location.href = '/'
    }

    render () {
        return (
            <div className='Header'>
                <div className='Logo'>
                    <h1><Link to={'/'}>{this.messages.getTranslations('title')}</Link></h1>
                </div>
                {this.isLoggedIn() ? (
                    <div className='Buttons'>
                        <Button className='primary' name='account' onClick={() => this.onClick('my-account')} />
                        <Button className='primary' name='logout' onClick={() => this.logout()} />
                    </div>
                ) : (
                    <div className='Buttons'>
                        <Button className='primary' name='login' onClick={() => this.onClick('login')} />
                        <Button className='secondary' name='registration' onClick={() => this.onClick('registration')} />
                    </div>
                )}
            </div>
        )
    }
}

export default withRouter(withCore(Header))