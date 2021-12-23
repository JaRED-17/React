import React from 'react'
import { Link } from 'react-router-dom'
import translations from './translations'
import Translations from '../../translations'

class Footer extends React.Component {
    messages = new Translations(translations, 'app.footer.')

    render () {
        return (
            <footer className='page-footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col l6 s12'>
                            <h5 className='white-text'>{this.messages.getTranslations('header.title')}</h5>
                            <p className='grey-text text-lighten-4'>{this.messages.getTranslations('header.content')}</p>
                        </div>
                        <div className='col l4 offset-l2 s12'>
                            <h5 className='white-text'>Links</h5>
                            <ul>
                                <li><Link className='grey-text text-lighten-3' to={'/'}>{this.messages.getTranslations('link.home')}</Link></li>
                                <li><Link className='grey-text text-lighten-3' to={'/news'}>{this.messages.getTranslations('link.news')}</Link></li>
                                <li><Link className='grey-text text-lighten-3' to={'/reviews'}>{this.messages.getTranslations('link.reviews')}</Link></li>
                                <li><Link className='grey-text text-lighten-3' to={'/articles'}>{this.messages.getTranslations('link.articles')}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <div className='container'>
                        {this.messages.getTranslations('rights')}
                        <a className='grey-text text-lighten-4 right' href='#!'>{this.messages.getTranslations('link.more')}</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer