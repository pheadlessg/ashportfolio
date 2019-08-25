import React, { Component } from 'react';
import '../css/App.css';
import Works from './Works';
import About from './About';
import Contact from './Contact';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <About />
        <Works />
        <Contact />
      </div>
    );
  }
}

export default Main;
