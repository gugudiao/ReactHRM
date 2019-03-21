import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layoutmain from './layout/demoLayout';
import Demo_hook from './pages/demo_hook/index.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layoutmain/>
        {/* <Demo_hook /> */}
      </div>
  }
}

export default App;
