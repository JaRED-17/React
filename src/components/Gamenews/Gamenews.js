import React from "react";
import Core from '../../core/Core'

class Gamenews extends React.Component {

  state = {
    isLoading: true,
    content: ''
  };

  get news() {
    Core.News().then((html) => {
      this.setState({
        isLoading: false,
        content: html
      })
    })
  }

  get content() {
    return <div className="Gamenews"></div>
  }

  get newsContent() {
    return (
        <div className="Gamenews" dangerouslySetInnerHTML={{ __html: this.state.content }} />
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