import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './cmps/Header/Header'
import Footer from './cmps/Footer/Footer'
import OsmApp from './pages/OsmApp/OsmApp'

// import './assets/main.css'

const App = () => {
  return (
    <div className="content-wrapper">
      <BrowserRouter>
      <Header />
      <main className="main-container">
        <Switch>
          <Route path="/" component={OsmApp} />
        </Switch>
      </main>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
