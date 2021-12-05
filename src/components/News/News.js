import React from "react";
import NewsImage from "../NewsImage";
import NewsContent from "../NewsContent";
import NewsLink from "../NewsLink";

class News extends React.Component {
    render () {
        const { content, horizontal, date, type } = this.props;

        return (
            <div className="News col s12">
                <div className="row">
                    <div className="col s12 m12">
                        <div className={`card ${horizontal ? 'horizontal' : '' }`}>
                            <NewsImage image={`${date}.jpg`} date={date} />
                            <div className="card-stacked">
                                <NewsContent content={content} />
                                {type === 'short' ? <NewsLink link={`/news?date=${date}&id=1`} /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;