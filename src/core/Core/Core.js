import React from "react";
import News from '../News';
import User from '../User';

class Core extends React.Component {
    /* News */
    static News = () => News.news()
    static allNews = () => News.allNews()

    /* User */
    static Login = () => User.login()
    static Register = () => User.register()
}

export default Core;