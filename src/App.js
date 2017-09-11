import React, { Component } from 'react';
import './css/main.min.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


// components
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header/>
        </div>
      </Router>
    );
  }
}

export default App;
