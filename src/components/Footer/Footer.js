import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render () {
        return (
            <footer className='page-footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col l6 s12'>
                            <h5 className='white-text'>Footer Content</h5>
                            <p className='grey-text text-lighten-4'>We are your salvation!!!</p>
                        </div>
                        <div className='col l4 offset-l2 s12'>
                            <h5 className='white-text'>Links</h5>
                            <ul>
                                <li><Link className='grey-text text-lighten-3' to={'/'}>Home</Link></li>
                                <li><Link className='grey-text text-lighten-3' to={'/news'}>News</Link></li>
                                <li><Link className='grey-text text-lighten-3' to={'/reviews'}>Reviews</Link></li>
                                <li><Link className='grey-text text-lighten-3' to={'/articles'}>Articles</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <div className='container'>
                        © 2014 Copyright Text
                        <a className='grey-text text-lighten-4 right' href='#!'>More Links</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer