import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AltApp from './AltApp';
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AltApp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

