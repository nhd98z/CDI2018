import React from 'react';
import { Router, Route } from 'react-router';
import { home } from './routes';
import Anchor1 from '../components/Anchor1';
import Anchor2 from '../components/Anchor2';
import Anchor3 from '../components/Anchor3';
import Anchor4 from '../components/Anchor4';
import Anchor5 from '../components/Anchor5';
import Anchor6 from '../components/Anchor6';
import Anchor7 from '../components/Anchor7';

export default (
  <Router>
    <Route path="/" component={home} />
    <Route path="/1" component={Anchor1} />
    <Route path="/2" component={Anchor2} />
    <Route path="/3" component={Anchor3} />
    <Route path="/4" component={Anchor4} />
    <Route path="/5" component={Anchor5} />
    <Route path="/6" component={Anchor6} />
    <Route path="/7" component={Anchor7} />
  </Router>
);
