import React from 'react';
import './App.css';
import {
  BrowserRouter
    as Router,
  Switch,
  Route
} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage';
import Main from './Main/Main'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  "@global": {
    html: {
      height: '100%',
      scrollbarWidth: 'none'
    },
    body: {
      margin: '0',
      height: '100%',
      overflowY: 'overlay',
    },
    "#root": {
      height: '100%',
    },
  },
}))
function App() {
  useStyles();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/dashboard">
            <Main />
          </Route>
          <Route exact path="/landing">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
