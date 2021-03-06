import React from 'react';
import Routes from './Routes';
import Layout from './components/Layout'
import './App.css';

function App() {
  return (
    <div className="App-component">
      <Layout>
        <Routes/>
      </Layout>
    </div>
  );
}

export default App;
