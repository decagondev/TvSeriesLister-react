import React from 'react';
import './index.css';

const Intro = props => (
  <div className="App-intro">
    {props.message}
  </div>
);

export default Intro;