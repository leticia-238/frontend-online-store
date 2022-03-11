import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepages from './pages/Homepage';
import './App.css';
import Cart from './pages/Cart';
import Item from './pages/Item';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Homepages } />
        <Route path="/cart" component={ Cart } />
        <Route path="/item/:id" render={ ({ match }) => (<Item { ...match } />) } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
