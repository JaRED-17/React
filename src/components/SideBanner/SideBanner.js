import React from 'react'
import PropTypes from 'prop-types'

class SideBanner extends React.Component {
    static propTypes = {
        class: PropTypes.string
    }

    render () {
        return (
            <div className={`SideBanner ${this.props.class}`} />
        )
    }
}

export default SideBanner