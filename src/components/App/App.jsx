import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    name: '_alexysdk-page',
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name}! xD</h1>
      </div>
    );
  }
}
