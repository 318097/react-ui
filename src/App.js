import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
