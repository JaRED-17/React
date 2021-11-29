import React from "react";
import Gamenews from "../../components/Gamenews";

class GameNewsPage extends React.Component {

    get urlParams () {
        return window.location.search;
    }

    get newsDateCreation () {
        const { urlParams } = this;
        const params = urlParams ? urlParams.replace('?', '') : null;

        return params ? params.split('=')[1] : null;
    }

    render () {
        return <Gamenews allNews={false} newsDateCreation={this.newsDateCreation || '01.05'}/>
    }
}

export default GameNewsPage;