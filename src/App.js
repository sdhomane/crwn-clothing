import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route shop='/hats' component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;