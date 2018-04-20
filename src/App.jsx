import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Main from './components/Main';


export default () => (
  <div>
    <Navigation />
    <div className="container">
      <Main />
    </div>
    <Footer />
  </div>
);
