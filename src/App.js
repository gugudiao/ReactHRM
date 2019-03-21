import React, { Component } from 'react';
import './App.css';
import Layoutmain from './layout/demoLayout';
import Demo_hook from './pages/DemoHook/index.js';
import { Link, NavLink, BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"> 
            <Layoutmain/>
            {/* <Demo_hook /> */}
        </div>
      </Router>
    )
  }
}

export default App;
