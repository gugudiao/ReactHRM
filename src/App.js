import React, { Component } from 'react';
import './App.css';
import Layoutmain from './layout/demoLayout';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
           <div className="App">
            <Layoutmain/>
          </div>
      </BrowserRouter>
      );
  }
}

export default App;
