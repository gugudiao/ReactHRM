import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layoutmain from './layout/demoLayout';
import DemoHook from './pages/DemoHook/index.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layoutmain/>
        {/* <DemoHook /> */}
      </div>
    )
  }
}

export default App;
