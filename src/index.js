import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollIntoView from "./components/ScrollIntoView";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollIntoView>
        <App /> 
      </ScrollIntoView>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

