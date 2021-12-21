import React from 'react'

class NewComment extends React.Component {
    render () {
        return (
            <div className='NewComment row'>
                <form className='col s12'>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <textarea id='textarea1' className='materialize-textarea' />
                            <label htmlFor='textarea1'>Textarea</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewComment