import React from "react";
import Sidebanner from "../../components/Sidebanner";
import Gamenews from "../../components/Gamenews";

class HomePage extends React.Component {
    render () {
        return (
            <>
                <Sidebanner class='left' />
                <Gamenews allNews={true} />
                <Sidebanner class='rigth' />
            </>
        )
    }
}

export default HomePage;