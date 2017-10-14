import './style.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

import Error404 from './components/Error404';
import HelloWorld from './components/HelloWorld';
import MainNav from './components/MainNav';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={MainNav} />
      <Route exact path='/hello_world' component={HelloWorld} />
      <Route component={Error404} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
