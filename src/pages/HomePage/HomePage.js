import React from "react";
import Sidebanner from "../../components/Sidebanner";
import RecentNews from "../../components/RecentNews";

class HomePage extends React.Component {
    render () {
        return (
            <>
                <Sidebanner class='left' />
                <RecentNews />
                <Sidebanner class='rigth' />
            </>
        )
    }
}

export default HomePage;