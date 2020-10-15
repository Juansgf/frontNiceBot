import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"

import Landing from './components/Landing'
import Tweet from './components/Tweet'

function App() {
  return (
    <BrowserRouter>
      
          <Switch>
            <Route exact path="/">
            <Landing/>  
            </Route>
            <Route exact path="/tweet">
             <Tweet/>
            </Route>
          </Switch>
      
    </BrowserRouter>
  );
}

export default App;
