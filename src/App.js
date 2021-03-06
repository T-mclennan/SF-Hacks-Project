import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout'
import './App.css';

function App() {

  return (
    <div className="App-component">
      <Router>
        <Layout>
          
        </Layout>
      </Router>
    </div>
  );
}

export default App;
