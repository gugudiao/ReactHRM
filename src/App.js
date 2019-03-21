import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo_hook from './pages/demo_hook/index.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Demo_hook /> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
