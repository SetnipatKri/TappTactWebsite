import React from 'react';
import { Router, Route } from 'react-router';

import LoginMainPage from './screens/LoginMainPage';
import RegisterMainPage from './screens/RegisterMainPage';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={LoginMainPage} />
    <Route path="/about" component={RegisterMainPage} />
  </Router>
);

export default Routes;