import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
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
  const [valid, setValid] = useState({
    username: true,
    password: true,
    passwordsMatch: true,
    verified: true
  });
  // const url = useState('http://forfoodsake-backend.herokuapp.com/api');
  const url = useState('http://localhost:5000/api');
  const showValid = data => {
    setValid(data);
  };
  const hideSplash = () => {
    setSplash(false);
  };
  useEffect(() => {
    setTimeout(() => {
      hideSplash();
    }, 1000);
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
          <Route exact path="/listing" component={FoodDetail} />
          <Route
            exact
            path="/login"
            component={() => (
              <LoginForm
                valid={valid}
                showValid={showValid}
                url={url}
                setUser={setUser}
                user={user}
              />
            )}
          />
          <Route
            exact
            path="/vendors/:id"
            render={routerProps => (
              <VendorProfile
                match={routerProps.match}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route exact path="/listing/id" component={ListingDetail} />
        </Switch>
      </main>
      <footer className="nav-container">
        <NavBar splash={splash} user={user} />
      </footer>
    </div>
  );
}

export default App;
