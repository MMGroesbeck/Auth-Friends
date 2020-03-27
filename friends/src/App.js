import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Login from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend"
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <PrivateRoute exact path="/add" component={AddFriend} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
    </Router> 
  );
}

export default App;
