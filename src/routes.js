import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hot from './pages/hot';
// import New from './pages/new';
// import Rising from './pages/rising';
import Product from './pages/product';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Hot} />
      {/* <Route path="/New" component={New} />
      <Route path="/Rising" component={Rising} /> */}
      <Route path="/products/:id" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
