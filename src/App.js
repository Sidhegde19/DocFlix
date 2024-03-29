import React from 'react';
import '../src/css/App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
        <Switch>
          <Route path="/">
              <HomeScreen />
          </Route>
        </Switch>
        )}
        </Router>
    </div>
  );
}

export default App;
