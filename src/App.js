import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Playground from "./components/Playground";
import "./App.scss";

const App = ({ history }) => {
  return (
    <div className="app react-ui">
      <h2 className="title" onClick={() => history.push("/play")}>
        React UI
      </h2>
      <div className="content">
        <Switch>
          <Route exact path="/playground" component={Playground} />
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/:component" component={ComponentView} /> */}
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
