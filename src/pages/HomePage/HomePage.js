import React from 'react'
import SideBanner from '../../components/SideBanner'
import RecentNews from '../../components/RecentNews'

class HomePage extends React.Component {
    render () {
        return (
            <>
                <SideBanner class='left' />
                <RecentNews />
                <SideBanner class='right' />
            </>
        )
    }
}

export default HomePage