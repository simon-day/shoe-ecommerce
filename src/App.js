import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import ShopPage from './components/ShopPage';
import Header from './components/Header';
import SignInSignUp from './components/SignInSignUp';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
