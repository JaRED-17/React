import React from "react";
import News from '../News';
import User from '../User';

class Core extends React.Component {
    /* News */
    static News = function () {
        return News.news()
    }
    /* User */
    static Login = function () {
        return User.login()
    }
    static Register = function () {
        return User.register()
    }
}

export default Core;