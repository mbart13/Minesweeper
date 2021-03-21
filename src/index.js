import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppProvider} from "./context";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from './pages/intro/Intro'

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <AppProvider>
          <Switch>
            <Route exact path="/">
              <Intro />
            </Route>
            <Route path="/game">
              <App />
            </Route>
          </Switch>
        </AppProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
