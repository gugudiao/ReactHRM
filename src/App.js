import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layoutmain from './layout/demoLayout';
import Demo_hook from './pages/demo_hook/index.js';
import { Link, NavLink, BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layoutmain/>
          {/* <Demo_hook /> */}
        </Router>
      </div>
    )
  }
}

export default App;
