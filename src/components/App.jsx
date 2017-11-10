import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BSStarterTemplate from './BSStarterTemplate';
import Counter from './Counter';
import Error404 from './Error404';
import HelloWorld from './HelloWorld';
import Image from './Image';
import MainNav from './MainNav';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainNav} />
      <Route exact path="/bootstrap_starter_template" component={BSStarterTemplate} />
      <Route exact path="/counter" render={() => <Counter name="Counter Example" />} />
      <Route exact path="/hello_world" component={HelloWorld} />
      <Route exact path="/image" component={Image} />
      <Route component={Error404} />
    </Switch>
  </Router>
);

export default App;
