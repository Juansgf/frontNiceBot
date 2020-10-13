import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Landing from './components/Landing'

function App() {
  return (
    <BrowserRouter>
      
          <Switch>
            <Route exact path="/">
            <Landing/>  
            </Route>
            <Route exact path="/about">
              
            </Route>
          </Switch>
      
    </BrowserRouter>
  );
}

export default App;
