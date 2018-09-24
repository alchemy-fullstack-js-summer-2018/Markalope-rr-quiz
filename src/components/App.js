import React, { Component, Fragment } from 'react';
import logo from '../assets/logo.png';
import RainbowLightBulb from './RainbowLightBulb';
import ColorChooser from './ColorChooser';
import './App.css';

class App extends Component {

  render() {

    return (
      <Fragment>
        <header>
          <img src={logo}/>
          <h1>React &amp; Redux Quiz</h1>
        </header>
        <main>
          <RainbowLightBulb/>
          <ColorChooser/>
        </main>
      </Fragment>
    );
  }
}

export default App;