import React from "react";
import { Link } from 'react-router-dom';

class NewsLink extends React.Component {
    render () {
        const { link } = this.props;

        return (
            <div className="card-action">
               <Link to={link}>Подробнее</Link>
            </div>
        )
    }
};

export default NewsLink;