import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from '../Home/index';
import ContactPage from '../ContactPage/index';
import ProjectPage from '../ProjectPage/index';
import Blog from '../BlogPage/index';
import ThankPage from '../../components/Contact/Thanks';
import NotFound from '../../components/NotFound/index';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/projects' component={ProjectPage} />
        <Route path='/blog' component={Blog} />
        <Route path='/thank-you' component={ThankPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
