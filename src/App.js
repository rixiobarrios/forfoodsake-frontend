import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import FoodDetail from './components/FoodListItem';
import { Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import AccountForm from './components/AccountForm';
import VendorProfile from './components/VendorProfile';
import ListingDetail from './components/ListingDetail';
import { createMuiTheme } from '@material-ui/core/styles';
import CreateListing from './components/CreateListing';

function App() {
  const [splash, setSplash] = useState(true);
  const [user, setUser] = useState();

  // const url = useState('http://forfoodsake-backend.herokuapp.com/api');
  const url = useState('http://localhost:5000/api');
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
              <AccountForm url={url} setUser={setUser} user={user} />
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
          <Route exact path="/vendors/:vendorId/listings/:listingId" render= { routerProps => <ListingDetail match={routerProps.match}/>} />
          <Route
            exact
            path="/newlisting"
            render={routerProps => {
              return <CreateListing user={user} />;
            }}
          />
        </Switch>
      </main>
      <footer className="nav-container">
        <NavBar splash={splash} user={user} />
      </footer>
    </div>
  );
}

export default App;
