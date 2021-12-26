import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import App from './components/App'
import Translations from './translations'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

const messages = new Translations({
    en: {
        'app.head.title': 'Game news'
    },
    ru: {
        'app.head.title': 'Новости игр'
    }
}, 'app.head.')

document.title = messages.getTranslations('title')

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
