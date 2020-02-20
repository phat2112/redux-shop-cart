import React from 'react';
import { BrowserRouter, withRouter, Route, Switch, Redirect } from 'react-router-dom'
import * as routes from './Routes'
import RouteWithPrivateTemplate from 'Container/Privatetemplate'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const App = ({ location }) =>{
  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 300, exit: 200 }
  return  (
   <>
     <TransitionGroup component="main" className="page-main">
      <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
        <Switch>
        <Route path='/login' exact component={routes.AsyncHome} />
        <RouteWithPrivateTemplate path='/shop' exact component={routes.AsyncShop} />
        {/* <Route path='/shop' exact component={routes.AsyncShop} /> */}
        <RouteWithPrivateTemplate path='/product-list' exact component={routes.AsyncProductList} />
        <RouteWithPrivateTemplate path='/user-profile' exact component={routes.AsyncUserProfile} />
        <RouteWithPrivateTemplate path='/product-detail' exact component={routes.AsyncProductDetail} />
        {/* <Route path='/shop/:id' exact component={routes.AsyncShopItem}/> */}
        <Route path='/admin-template' exact component={routes.AsyncAdminPage}/>
        <Redirect exact from="/" to="/login" />
      </Switch>
      </CSSTransition>
      </TransitionGroup>
   </>
  )
}


export default withRouter(App);
