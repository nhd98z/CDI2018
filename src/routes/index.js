import React from "react";
import { Router, Route } from "react-router";
import { home,award } from "./routes";

export default (
  <Router>
    <Route path="/" component={home}/>
    <Route path="/award" component={award}/>
  </Router>
);
