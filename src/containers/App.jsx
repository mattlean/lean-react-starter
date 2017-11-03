import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import BSStarterTemplate from '../components/BSStarterTemplate';
import Counter from './Counter';
import Error404 from '../components/Error404';
import HelloWorld from '../components/HelloWorld';
import Image from '../components/Image';
import MainNav from '../components/MainNav';
import store from '../store';

const App = () => (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={MainNav} />
        <Route exact path="/bootstrap-starter-template" component={BSStarterTemplate} />
        <Route exact path="/counter" render={() => <Counter name="Counter Example" />} />
        <Route exact path="/hello-world" component={HelloWorld} />
        <Route exact path="/image" component={Image} />
        <Route component={Error404} />
      </Switch>
    </Provider>
  </Router>
);

export default App;
