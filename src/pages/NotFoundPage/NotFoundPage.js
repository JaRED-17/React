import React from 'react'
import Button from '../../components/Button'
import { withRouter } from 'react-router-dom'
import translations from './translations'
import Translations from '../../translations'
import PropTypes from 'prop-types'

class NotFoundPage extends React.Component {
    static propTypes = {
        history: PropTypes.array
    }
    messages = new Translations(translations, 'app.page.notfound.')

    back = () => this.props.history.push('/')

    render () {
        return (
            <div className='NotFoundPage'>
                <h3>{this.messages.getTranslations('.header')}</h3>
                <div className='Buttons'>
                    <Button className='primary' name='back' onClick={this.back} />
                </div>
            </div>
        )
    }
}

export default withRouter(NotFoundPage)