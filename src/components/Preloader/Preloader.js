import React from 'react'

class Preloader extends React.Component {
    state = { loading: true }

    componentDidMount () {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1500)
    }

    get content () {
        return <div className='Preloader' />
    }

    render () {
        const { loading } = this.state

        return loading ? this.content : null
    }
}

export default Preloader