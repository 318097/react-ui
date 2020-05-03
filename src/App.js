import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Switch>{/* <Route exact path="/home" component={Home} /> */}</Switch>
    </div>
  );
};

export default App;
