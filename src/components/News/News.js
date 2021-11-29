import React from "react";
import NewsImage from "../NewsImage";
import NewsContent from "../NewsContent";
import NewsLink from "../NewsLink";

class News extends React.Component {
    render () {
        const horizontal = true;
        const { content, newsDateCreation } = this.props;

        return (
            <div className="News col s12">
                <div className="row">
                    <div className="col s12 m12">
                        <div className={`card ${horizontal ? 'horizontal' : '' }`}>
                            <NewsImage image={`${newsDateCreation}.jpg`} />
                            <div className="card-stacked">
                                <NewsContent content={content} />
                                <NewsLink link={`/news?newsDataCreation=${newsDateCreation}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;