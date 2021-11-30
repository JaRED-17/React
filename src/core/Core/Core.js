import React from "react";
import News from '../News';
import User from '../User';

class Core extends React.Component {
    /* News */
    static News = (date) => News.news(date);
    static allNews = () => News.allNews();

    /* User */
    static Login = () => User.login();
    static Registration = () => User.registration();
}

export default Core;