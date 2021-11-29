import React from "react";

class NewsImage extends React.Component {
    render () {
        const { image } = this.props;

        return (
            <div className="card-image">
                <img src={`media/images/${image}`} alt="logo" />
            </div>
        )
    }
};

export default NewsImage;