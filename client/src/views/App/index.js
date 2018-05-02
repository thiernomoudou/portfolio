import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './../Home/index';
import ContactPage from './../ContactPage/index';
import ThankPage from './../../components/Contact/Thanks';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/thank-you' component={ThankPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
