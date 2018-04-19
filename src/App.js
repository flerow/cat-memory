import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
