import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Homepage from './components/Homepage';
import ShopPage from './components/ShopPage';
import Header from './components/Header';
import SignInSignUp from './components/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';
import { setCurrentUser } from './redux/userActions';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

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

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

export default connect(
  null,
  { setCurrentUser }
)(App);
