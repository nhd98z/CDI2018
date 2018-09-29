import React from "react";
import { Router, Route } from "react-router";
import { home } from "./routes";

export default (
  <Router>
    <Route path="/" component={home}/>
  </Router>
);
