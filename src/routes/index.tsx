import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Movie from '../pages/Movie';
import BestOfYear from '../pages/BestOfYear';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/movie" component={Movie} isPrivate />
    <Route path="/bestofyear" component={BestOfYear} isPrivate />
  </Switch>
);

export default Routes;
