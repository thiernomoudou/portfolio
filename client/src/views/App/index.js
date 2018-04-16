import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import HomePage from './../Home/index';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={HomePage} />
      </Router>
    );
  }
}

export default App;
