import React from "react";
import Header from '../Header/Header';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;