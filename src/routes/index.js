import React from 'react';
import { Router, Route } from 'react-router';
import { home, award } from './routes';
import Anchor1 from '../components/Anchor1';
<<<<<<< HEAD
import Anchor2 from '../components/Anchor2';
=======
import Anchor4 from '../components/Anchor4';
>>>>>>> 2d3023878e4874f01f5bb3ec9a8411bf5f94c169

export default (
  <Router>
    <Route path="/" component={home} />
    <Route path="/1" component={Anchor1} />
<<<<<<< HEAD
    <Route path="/2" component={Anchor2} />
    <Route path="/3" component={award} />
=======
    <Route path="/4" component={Anchor4}/>
>>>>>>> 2d3023878e4874f01f5bb3ec9a8411bf5f94c169
  </Router>
);
