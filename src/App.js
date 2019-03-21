import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layoutmain from './layout/demoLayout';
import Demo_hook from './pages/demo_hook/index.js';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
           <div className="App">
            <Layoutmain/>
          </div>
      </BrowserRouter>
    )
  }
}

export default App;
