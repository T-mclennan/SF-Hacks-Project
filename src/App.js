import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/about/AboutPage';
import BrowsePage from './pages/browse/BrowsePage';
import CreatePage from './pages/create/CreatePage';
import ContactPage from './pages/contact/ContactPage';
import Landing from './pages/landing/Landing';
import './App.css';

function App() {

  return (
    <div className="App-component">
      <Layout>
        <Switch>
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/browse' component={BrowsePage} />
          <Route exact path='/create' component={CreatePage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
