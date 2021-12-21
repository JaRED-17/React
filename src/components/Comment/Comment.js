import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component {
    static propTypes = {
        answers: PropTypes.number,
        content: PropTypes.string
    }

    render () {
        const { answers, content } = this.props

        return (
            <div className='Comment'>
                <div className='Comment-header'>
                    <div className='avatar' />
                    <div>
                        <div className='userName'>User Name</div>
                        <div className='date'>01.01.2021</div>
                    </div>
                </div>
                <div className='Comment-content'>
                    {content}
                </div>
                <div className='Comment-answers'>
                    <p>Ответов: {answers}</p>
                    <a href='#'>Ответить</a>
                </div>
            </div>
        )
    }
}

export default Comment