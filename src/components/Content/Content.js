import React from "react";
import './Content.scss';
import Sidebanner from '../Sidebanner/Sidebanner';


class Content extends React.Component {

  render() {
    return (
        <div className="Content">
            <Sidebanner class='left' />
            <Sidebanner class='rigth' />
        </div>
    );
  }
}

export default Content;