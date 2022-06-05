import React from 'react'
import withCore from '../../helpers/withCore'
import Form from '../Form'
import PropTypes from 'prop-types'
import Loading from '../../components/Loading'
import { observer } from 'mobx-react'

@observer
class MyAccountForm extends React.Component {
    static propTypes = {
        core: PropTypes.object
    }
    state = {
        hasError: false
    }

    componentDidMount () {
        this.getUserData({user: 'user1'})
        this.settings()
    }

    get core () {
        return this.props.core
    }

    get coreUser () {
        return this.core.user
    }

    get coreFields () {
        return this.core.settings.fields
    }

    getUserData = (user) => this.coreUser.data.API(user)

    saveUserData = (data) => this.coreUser.save.API(data)

    settings = () => this.coreFields.API('account')

    get fields () {
        const response = this.coreFields.response()
        return response || {}
    }

    get isLoading () {
        return this.coreUser.data.loading() || this.coreFields.loading()
    }

    render () {
        const { hasError } = this.state
        let userData = {}
        let fields = []
        const loading = this.isLoading

        if (!loading) {
            userData = this.coreUser.data.response()
            fields = this.fields

            fields.forEach(field => {
                field.value = userData[field.name] || ''
            })
        }

        return loading ? <Loading /> : <Form fields={fields} name='save' formClassName='MyAccountForm' api={this.saveUserData} hasError={hasError} />
    }
}

export default withCore(MyAccountForm)