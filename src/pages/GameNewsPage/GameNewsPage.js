import React from "react";
import Gamenews from "../../components/Gamenews";

class GameNewsPage extends React.Component {
    render () {
        return <Gamenews allNews={false} newsDateCreation={'01.05'}/>
    }
}

export default GameNewsPage;