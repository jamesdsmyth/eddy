import "./scss/main.scss";
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

class App extends React.Component {
  render() {
    return (
      <div>
        'Hello world!'
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));