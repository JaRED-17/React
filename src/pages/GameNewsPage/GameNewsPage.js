import React from "react";
import NewsByDate from "../../components/NewsByDate";
import RecentNews from "../../components/RecentNews";
import NewComment from "../../components/NewComment";
import Comments from "../../components/Comments";
import LastNNews from "../../components/LastNNews";

class GameNewsPage extends React.Component {

    get urlParams () {
        const urlParams = window.location.search;
        const params = urlParams ? urlParams.replace('?', '') : null;

        return params ? this.parseUrlParams(params) : null;
    }

    parseUrlParams = (params) => {
        let result = {};

        params.split('&').map(param => param.split('=').reduce((previousValue, currentValue) => result[previousValue] = currentValue));
        return result;
    }

    newsByDate = (urlParams) => {
        return (
            <div className='newsPage'>
                <div className='newsByDate'>
                    <NewsByDate date={urlParams.date || '01.05.2021'} />
                </div>
                <div className='NewComment'>
                    <NewComment />
                </div>
                <div className='Comments'>
                    <Comments />
                </div>
                <div className='recentNews'>
                    <h3>Последние новости</h3>
                    <RecentNews skipNews={urlParams.date} />
                </div>
            </div>
        )
    }

    LastNNews = () => {
        return (
            <div className='newsPage'>
                <div className='newsByDate'>
                    <LastNNews />
                </div>
            </div>
        )
    }

    render () {
        const { urlParams } = this;

        console.log(urlParams)

        return urlParams ? this.newsByDate(urlParams) : this.LastNNews();
    }
}

export default GameNewsPage;