import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import routes from './routes/index';
import { Router } from "react-router";

ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0,0)} routes={routes} history={browserHistory}/>,
    document.getElementById("root")
)