import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './cmps/Header/Header'
import OsmApp from './pages/OsmApp/OsmApp'

// import './assets/main.css'

const App = () => {
  return (
    <div className="content-wrapper">
      <main className="main-container">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={OsmApp} />
        </Switch>
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
