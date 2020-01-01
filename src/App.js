import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import ShopPage from './components/ShopPage';
import Header from './components/Header';
import SignInSignUp from './components/SignInSignUp';
import { auth } from './firebase/FirebaseUtils';

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
