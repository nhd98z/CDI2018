import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import routes from './routes/index';
import { Router } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(<Router routes={routes} history={browserHistory} />, document.getElementById('root'));
