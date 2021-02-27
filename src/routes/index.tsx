import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Currency from '../pages/Currency';

import Home from '../pages/Home';
import List from '../pages/List';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SignUp from '../pages/SignUp';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/sign-up" exact component={SignUp}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/currency" exact component={Currency}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/list" exact component={List}/>
    </Switch>
  )
}

export default Routes;