import React from "react";
import News from '../News';

class Core extends React.Component {
    static News = function () {
        return News.news()
    }
}

export default Core;