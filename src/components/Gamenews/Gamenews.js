import React from "react";

class Gamenews extends React.Component {

  state = {
    isLoading: true,
    content: ''
  };

  get news() {
    fetch('../../media/news/15.02.html').then((response) => {
      return response.text();
    }).then((html) => {
      return this.setState({
        isLoading: false,
        content: html
      });
    });
  }

  get content() {
    return <div className="Gamenews"></div>
  }

  get newsContent() {
    return (
        <div className="Gamenews">
          {this.state.content}
        </div>
    )
  }

  render() {
    const {isLoading} = this.state;
    // eslint-disable-next-line no-unused-expressions
    isLoading ? this.news : null;
    return isLoading ? this.content : this.newsContent;
  }
}

export default Gamenews;