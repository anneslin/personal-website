import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
ReactDOM.render(
  <div>
    <link href="http://fonts.googleapis.com/css?family=Montserrat:100,400,700|News+Cycle|Open+Sans" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/17bc5ef63c.css" media="all" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Router>
      <App />
    </Router>
  </div>,
  document.getElementById('root')
);
