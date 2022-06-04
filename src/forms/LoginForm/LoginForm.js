import React from 'react'
import withCore from '../../helpers/withCore'
import Form from '../Form'
import Loading from '../../components/Loading'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

@observer
class LoginForm extends React.Component {
    static propTypes = {
        core: PropTypes.object
    }
    state = {
        hasError: false
    }

    componentDidMount () {
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

    login = (data) => this.coreUser.login.API(data).then(response => {
        console.log(response)

        if (response.success) {
            window.localStorage.setItem('isLoggedIn', true)
            window.location.href = '/'
        }
        this.setState({hasError: !response.success})
    })

    settings = () => this.coreSettings.API()

    get fields () {
        const response = this.coreSettings.response()
        return response ? response.forms?.login?.fields : {}
    }

    render () {
        const { hasError } = this.state
        const fields = this.fields
        const loading = this.coreSettings.loading()

        return loading ? <Loading /> : <Form fields={fields} name='login' formClassName='LoginForm' api={this.login} hasError={hasError} />
    }
}

export default withCore(LoginForm)