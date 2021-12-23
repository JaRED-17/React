import React from 'react'
import Button from '../Button'
import { withRouter, Link } from 'react-router-dom'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'
import core from '../../core/Core'

class Header extends React.Component {
    static propTypes = {
        history: PropTypes.array
    }
    messages = new Translations(translations, 'app.header.')

    isLoggedIn = () => core.user.isLoggedIn()

    onClick = (path) => this.props.history.push(`/${path}`)

    logout = () => {
        localStorage.setItem('isLoggedIn', false)
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

export default withRouter(Header)