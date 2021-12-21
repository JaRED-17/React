import React from 'react'
import Button from '../../components/Button'
import { withRouter } from 'react-router-dom'
import translations from './translations'
import PropTypes from 'prop-types'

class NotFoundPage extends React.Component {
    static propTypes = {
        history: PropTypes.array
    }
    back = () => this.props.history.push('/')

    render () {
        const language = 'ru'

        return (
            <div className='NotFoundPage'>
                <h3>{translations[language]['app.page.notfound.header']}</h3>
                <div className='Buttons'>
                    <Button className='primary' name='back' onClick={this.back} />
                </div>
            </div>
        )
    }
}

export default withRouter(NotFoundPage)