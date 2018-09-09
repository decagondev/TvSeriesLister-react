import React, { Component } from 'react';
import Main from '../../components/Main';
import './index.css';


class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Series Lister</h1>
        </header>
        <p className="App-intro">
          <Main />
        </p>
      </div>
    );
  }
}

export default App;
