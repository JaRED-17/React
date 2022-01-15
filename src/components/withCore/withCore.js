import React from 'react'
import {CoreConsumer} from '../CoreContext'

const withCore = (Wrapper) => {
    return (props) => {
        return (
            <CoreConsumer>
                {
                    (core) => {
                        return <Wrapper {...props} core={core} />
                    }
                }
            </CoreConsumer>
        )
    }
}

export default withCore