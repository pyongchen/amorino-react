import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router'

import Init from './main'
import Home from './pages/home'
import Product from './pages/product'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Init}>
      <IndexRoute component={Home}/>
      <Route path="/product" component={Product}/>
    </Route>
  </Router>
  , document.getElementById('app')
);
