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
                    <Error show={false} errorCode={1} />
                    <div className='Form'>
                        <Field type={'text'} name={'firstName'} showWarning={false} data={userData.first_name || ''} />
                        <Field type={'text'} name={'lastName'} showWarning={false} data={userData.last_name || ''} />
                        <Field type={'text'} name={'email'} showWarning={false} data={userData.email || ''} />
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