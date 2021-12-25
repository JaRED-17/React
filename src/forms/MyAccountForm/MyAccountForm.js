import React from 'react'
import Error from '../../components/Error'
import Field from '../../components/Field'
import Button from '../../components/Button'
import core from '../../core/Core/Core'

class MyAccountForm extends React.Component {
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

    onSubmit = (event) => {
        event.preventDefault()
    }

    render () {
        const { userData } = this.state

        return (
            <div className='MyAccountForm'>
                <form onSubmit={this.onSubmit}>
                    <Error hidden={'hidden'} errorCode={1} />
                    <div className='Form'>
                        <Field type={'text'} name={'firstName'} hidden={'hidden'} data={userData.first_name || ''} />
                        <Field type={'text'} name={'lastName'} hidden={'hidden'} data={userData.last_name || ''} />
                        <Field type={'text'} name={'email'} hidden={'hidden'} data={userData.email || ''} />
                    </div>

                    <div className='Buttons'>
                        <Button type='submit' className='primary' name='save' />
                    </div>
                </form>
            </div>
        )
    }
}

export default MyAccountForm