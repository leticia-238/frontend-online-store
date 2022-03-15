import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepages from './pages/Homepage';
import './App.css';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Item from './pages/Item';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/item/:id" render={ ({ match }) => (<Item { ...match } />) } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/cart" component={ Cart } />
        <Route exact path="/" component={ Homepages } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
//
