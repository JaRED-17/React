import React from 'react'
import Comment from '../Comment'

class Comments extends React.Component {
    emptyComments = () => {
        return (
            <div>
                No comments
            </div>
        )
    }

    Comments = () => {
        return (
            <div>
                <Comment answers={10} content={'Comment 1'} />
                <Comment answers={4} content={'Comment 2'} />
            </div>
        )
    }

    render () {
        const comments = 1

        return comments === 0 ? this.emptyComments() : this.Comments()
    }
}

export default Comments