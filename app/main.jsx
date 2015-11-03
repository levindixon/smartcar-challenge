import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App/App.jsx';

ReactDOM.render((
  <Router>
    <Route path="*" component={App} />
  </Router>
),  document.getElementById('root'));

