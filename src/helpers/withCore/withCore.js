import React from 'react'
import {CoreConsumer} from '../CoreContext'

const withCore = (Wrapper) => {
    return (props) => {
        return (
            <CoreConsumer>
                {(core) => <Wrapper {...props} core={core} />}
            </CoreConsumer>
        )
    }
}

export default withCore