import React, { Component } from 'react';
import Intro from '../Intro'
import Series from '../../containers/Series';
import './index.css';


class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Series Lister</h1>
        </header>
        <p className="App-intro">
          <Intro message='Here you can find all of your most loved series'/>
          <Series />
        </p>
      </div>
    );
  }
}

export default App;
