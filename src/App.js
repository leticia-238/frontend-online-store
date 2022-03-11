import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepages from './components/Homepage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ Homepages } />

    </BrowserRouter>
  );
}

export default App;
