import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Tweet from "./components/Tweet";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
