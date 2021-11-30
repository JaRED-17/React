import React from "react";
import GameNews from "../../components/GameNews";

class GameNewsPage extends React.Component {

    get urlParams () {
        const urlParams =  window.location.search;
        const params = urlParams ? urlParams.replace('?', '') : null;

        return params ? this.parseUrlParams(params) : null;
    }

    parseUrlParams = (params) => {
        const splitParams = params.split('&');
        let result = {};

        for (let i = 0; i < splitParams.length; i++) {
            const values = splitParams[i].split('=');
            result[values[0]] = values[1];
        }

        return result;
    }

    render () {
        const { urlParams } = this;

        return urlParams ? <GameNews allNews={false} newsDateCreation={urlParams.date || '01.05'}/> : null
    }
}

export default GameNewsPage;