import React from "react";

class NewsImage extends React.Component {
    render () {
        const { image, date } = this.props;

        return (
            <div className="card-image">
                <img src={`media/news/${date}/Images/${image}`} alt="logo" />
            </div>
        )
    }
};

export default NewsImage;