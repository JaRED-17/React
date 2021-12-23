import React from 'react'
import translations from './translations'
import Translations from '../../translations'

class MyAccountPage extends React.Component {
    messages = new Translations(translations, 'app.page.myAccount.')

    render () {
        return <div className='MyAccountPage'>{this.messages.getTranslations('header')}</div>
    }
}

export default MyAccountPage