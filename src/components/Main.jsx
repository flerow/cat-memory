import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import ProductList from './CatList';
import AddCat from './AddCat';
import EditCat from './EditCat';
import Memory from './Memory';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/zaloguj" component={LoginForm} />
    <Route exact path="/koty" component={ProductList} />
    <Route path="/dodaj-kota" component={AddCat} />
    <Route path="/koty/:id" component={EditCat} />
    <Route path="/memory" component={Memory} />
  </Switch>
);
