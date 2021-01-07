import React from "react";
import Header from '../Header/Header';
import Content from '../Content/Content';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;