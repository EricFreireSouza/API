import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './components/menu';
import Home from './pages/home';
import Hot from './pages/hot';
import New from './pages/new';
import Rising from './pages/rising';

const Routes = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hot" component={Hot} />
      <Route path="/new" component={New} />
      <Route path="/rising" component={Rising} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
