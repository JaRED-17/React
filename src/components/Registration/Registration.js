import React from 'react'
import Popup from '../Popup'
import RegistrationForm from '../../forms/RegistrationForm'

class Registration extends React.Component {
    render () {
        return (
            <Popup>
                <RegistrationForm />
            </Popup>
        )
    }
}

export default Registration