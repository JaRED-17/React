import React from 'react'
import translations from './translations'
import Translations from '../../translations'
import Field from '../../components/Field'
import core from '../../core/Core'

class MyAccountPage extends React.Component {
    messages = new Translations(translations, 'app.page.myAccount.')

    state = {
        userData: {}
    }

    getUserData = (data) => core.user.data.API(data)

    populateUserData = () => {
        this.getUserData({user: 'user1'}).then(response => {

            if (Object.keys(response).length !== 0) {
                this.setState({userData: response})
            }
        })
    }

    componentDidMount () {
        this.populateUserData()
    }

    render () {
        const { userData } = this.state

        return (
            <div className='MyAccountPage'>
                <h3>{this.messages.getTranslations('header')}</h3>
                <Field type={'text'} name={'firstName'} hidden={'hidden'} data={userData.first_name || ''} />
                <Field type={'text'} name={'lastName'} hidden={'hidden'} data={userData.last_name || ''} />
                <Field type={'text'} name={'email'} hidden={'hidden'} data={userData.email || ''} />
            </div>
        )
    }
}

export default MyAccountPage