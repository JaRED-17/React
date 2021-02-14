import React from "react";
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';

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