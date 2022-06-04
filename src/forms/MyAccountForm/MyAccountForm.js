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

    get coreUser () {
        const { core } = this.props
        return core.user
    }

    get coreSettings () {
        const { core } = this.props
        return core.settings.settings
    }

    getUserData = (user) => this.coreUser.data.API(user)

    saveUserData = (data) => this.coreUser.save.API(data)

    settings = () => this.coreSettings.API()

    get fields () {
        const response = this.coreSettings.response()
        return response ? response.forms?.account?.fields : {}
    }

    get isLoading () {
        return this.coreUser.data.loading() || this.coreSettings.loading()
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
                field.value = userData[field.name]
            })
        }

        return loading ? <Loading /> : <Form fields={fields} name='save' formClassName='MyAccountForm' api={this.saveUserData} hasError={hasError} />
    }
}

export default withCore(MyAccountForm)