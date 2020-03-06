import React from 'react';
import './App.css';
import Home from './components/Home';
import VendorDetail from './components/VendorDetail';
import ListingDetail from './components/ListingDetail';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <head></head>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vendor" component={VendorDetail} />
          <Route exact path="/listing" component={ListingDetail} />
        </Switch>
        <footer>
          <nav>
            <Link href="">Page</Link>
            <Link href="">Home</Link>
            <Link href="">User</Link>
          </nav>
        </footer>
      </main>
    </div>
  );
}

export default App;
