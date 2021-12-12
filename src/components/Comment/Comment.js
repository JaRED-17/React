import React from "react";

class Comment extends React.Component {

    render () {
        const { answers, content } = this.props;

        return (
            <div className='Comment'>
                <div className='Comment-content'>
                    {content}
                </div>
                <div className='Answers'>
                    <p>Ответов: {answers}</p>
                    <a href='#'>Ответить</a>
                </div>
            </div>
        )
    }
}

export default Comment;