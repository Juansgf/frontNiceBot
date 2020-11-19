import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Tweet from "./components/Tweet";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Stats from "./components/Stats"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <>
              <Landing />
              <Overview />
            </>
          )}
        />
        <Route exact path="/tweet" component={Tweet} />
        <Route exact path="/stats" component={Stats} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
