import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';

const SmartPage = () => (
  <div>
    <h1>SmartPage</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/casual" component={SmartPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
