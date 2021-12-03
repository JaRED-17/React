import React from "react";
import OneNews from "../../components/OneNews";
import RecentNews from "../../components/RecentNews";

class GameNewsPage extends React.Component {

    get urlParams () {
        const urlParams = window.location.search;
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

    content = (urlParams) => {
        return (
            <div className='newsPage'>
                <div className='oneNews'>
                    <OneNews date={urlParams.date || '01.05.2021'} />
                </div>
                <div className='recentNews'>
                    <h3>Последние новости</h3>
                    <RecentNews skipNews={urlParams.date} />
                </div>
            </div>
        )
    }

    render () {
        const { urlParams } = this;

        return urlParams ? this.content(urlParams) : null
    }
}

export default GameNewsPage;