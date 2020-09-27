import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing.js';
import Contact from './Contact.js';


export const Routing = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/Contact" component={Contact}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routing;