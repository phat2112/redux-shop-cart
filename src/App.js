import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import * as routes from './Routes'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/homepage' exact component={routes.AsyncHome} />
      <Route path='/shop' exact component={routes.AsyncShop} />
      <Redirect exact from="/" to="/homepage" />
    </Switch>
  </BrowserRouter>
)

export default App;
