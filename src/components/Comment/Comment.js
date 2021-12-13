import React from "react";

class Comment extends React.Component {

    render () {
        const { answers, content } = this.props;

        return (
            <div className='Comment'>
                <div className='Comment-header'>
                    <div className='avatar'></div>
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

export default Comment;