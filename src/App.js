import React from 'react';
import './App.css';
import Home from './components/Home';
import VendorDetail from './components/VendorDetail';
import FoodDetail from './components/FoodDetail';
import { Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import VendorProfile from './components/VendorProfile';
import ListingDetail from './components/ListingDetail';

function App() {
    return (
        <div className="App">
            <head></head>
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/vendor" component={VendorDetail} />
                    <Route exact path="/listing" component={FoodDetail} />
                    <Route exact path="/login" component={LoginForm} />
                    <Route
                        exact
                        path="/vendor-profile"
                        component={VendorProfile}
                    />
                    <Route exact path="/listing/id" component={ListingDetail} />
                </Switch>
                <footer>
                    <NavBar />
                </footer>
            </main>
        </div>
    );
}

export default App;
