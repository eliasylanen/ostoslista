import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {requireAuth} from '../auth';
import Site from './Site';
import Home from './Home';
import List from './List';
import Login from './Login';
// import EditProfile from './EditProfile';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Site}>
          <Route onEnter={requireAuth}>
            {/* Place all authenticated routes here */}
            <Route path="/" component={Home}></Route>
            <Route path="/lists/:listId" component={List}></Route>
          </Route>
          <Route path="/login" component={Login}></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
