import React from 'react'
import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'
import Preloader from '../Preloader'
import PopupHandler from '../PopupHandler'
import {CoreProvider} from '../../helpers/CoreContext'
import core from '../../core/Core'

const App = () => {
    return (
        <div className='App'>
            <CoreProvider value={core}>
                <Header />
                <Content />
                <Footer />
                <Preloader />
                <PopupHandler />
            </CoreProvider>
        </div>
    )
}

export default App