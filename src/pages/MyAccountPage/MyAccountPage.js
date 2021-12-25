import React from 'react'
import translations from './translations'
import Translations from '../../translations'
import MyAccountForm from '../../forms/MyAccountForm'

class MyAccountPage extends React.Component {
    messages = new Translations(translations, 'app.page.myAccount.')

    render () {
        return (
            <div className='MyAccountPage'>
                <h3>{this.messages.getTranslations('header')}</h3>
                <MyAccountForm />
            </div>
        )
    }
}

export default MyAccountPage