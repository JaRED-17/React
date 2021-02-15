import React from "react";
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import Popup from '../Popup';
import Preloader from '../Preloader';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
        <Preloader />
        <Popup>
          <p>Default content</p>
        </Popup>
      </div>
    );
  }
}

export default App;