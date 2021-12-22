import React from 'react'
import Button from '../Button'
import { withRouter, Link } from 'react-router-dom'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class Header extends React.Component {
    static propTypes = {
        history: PropTypes.array
    }
    messages = new Translations(translations, 'app.header.')

    onClick = (path) => this.props.history.push(`/${path}`)

    render () {
        return (
            <div className='Header'>
                <div className='Logo'>
                    <h1><Link to={'/'}>{this.messages.getTranslations('title')}</Link></h1>
                </div>
                <div className='Buttons'>
                    <Button className='primary' name='login' onClick={() => this.onClick('login')} />
                    <Button className='secondary' name='registration' onClick={() => this.onClick('registration')} />
                </div>
            </div>
        )
    }
}

export default withRouter(Header)