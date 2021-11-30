import React from "react";
import Sidebanner from "../../components/Sidebanner";
import GameNews from "../../components/GameNews";

class HomePage extends React.Component {
    render () {
        return (
            <>
                <Sidebanner class='left' />
                <GameNews allNews={true} />
                <Sidebanner class='rigth' />
            </>
        )
    }
}

export default HomePage;