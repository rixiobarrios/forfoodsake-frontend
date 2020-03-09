import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import VendorDetail from './components/VendorDetail';
import FoodDetail from './components/FoodDetail';
import { Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import VendorProfile from './components/VendorProfile';
import ListingDetail from './components/ListingDetail';
import { createMuiTheme } from '@material-ui/core/styles';

function App() {
  const [splash, setSplash] = useState(true);
  const [user, setUser] = useState();
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const hideSplash = () => {
    setSplash(false);
  };
  useEffect(() => {
    setTimeout(() => {
      hideSplash();
    }, 3000);
  }, []);
  return (
    <div className="App">
      <main className="app-content">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home hideSplash={hideSplash} splash={splash} />}
          />
          <Route exact path="/vendor" component={VendorDetail} />
          <Route exact path="/listing" component={FoodDetail} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/vendor-profile" component={VendorProfile} />
          <Route exact path="/listing/id" component={ListingDetail} />
        </Switch>
      </main>
      <footer className="nav-container">
        <NavBar splash={splash} />
      </footer>
    </div>
  );
}

export default App;
