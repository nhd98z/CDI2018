import React from 'react';
import { Router, Route } from 'react-router';
import { home, award } from './routes';
import Anchor1 from '../components/Anchor1';

export default (
  <Router>
    <Route path="/" component={home} />
    <Route path="/3" component={award} />
    <Route path="/1" component={Anchor1} />
  </Router>
);
