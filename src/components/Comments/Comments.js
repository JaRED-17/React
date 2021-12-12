import React from "react";

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
                <div>
                    Comment 1
                </div>
                <div>
                    Comment 2
                </div>
            </div>
        )
    }

    render () {
        const comments = 1

        return comments === 0 ? this.emptyComments() : this.Comments();
    }
}

export default Comments;