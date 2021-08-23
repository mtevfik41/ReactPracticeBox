import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import SigninPage from './pages/SigninPage';
import './App.css';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signin" component={SigninPage} exact/>
        </Switch>
      </Router>
  );
}

export default App;
