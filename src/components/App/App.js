import React from "react";
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import Preloader from '../Preloader';
import PopupHandler from '../PopupHandler';
import Routes from '../Routes';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
        <Preloader />
        <PopupHandler />
        <Routes />
      </div>
    );
  }
}

export default App;