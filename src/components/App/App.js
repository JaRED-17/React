import React from "react";
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import Popup from '../Popup';
import Preloader from '../Preloader';
import LoginForm from '../LoginForm';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
        <Preloader />
        <Popup>
            <LoginForm />
        </Popup>
      </div>
    );
  }
}

export default App;