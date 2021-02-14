import React from "react";
import Sidebanner from '../Sidebanner/Sidebanner';
import Gamenews from '../Gamenews/Gamenews';

class Content extends React.Component {

  render() {
    return (
        <div className="Content">
            <Sidebanner class='left' />
            <Gamenews />
            <Sidebanner class='rigth' />
        </div>
    );
  }
}

export default Content;