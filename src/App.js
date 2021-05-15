import React from 'react';
import '../src/css/App.css';
import HomeScreen from './screens/HomeScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
              <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
