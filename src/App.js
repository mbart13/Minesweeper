import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Minesweeper from './pages/minesweeper/minesweeper.component';
import Intro from './pages/intro/Intro'
import {AppProvider} from "./context";


function App() {
    return (
      <AppProvider>
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route path="/game">
            <Minesweeper />
          </Route>
        </Switch>
      </AppProvider>
      );
    }

export default App;
