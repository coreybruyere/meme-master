import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Welcome from './Welcome';
import Register from './Register';

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/' render={props => <Register {...props} />} />
      <Route exact path='/welcome' render={props => <Welcome {...props} />} />
    </Switch>
  </BrowserRouter>
);
