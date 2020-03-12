import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import AccountForm from './components/AccountForm';
import VendorProfile from './components/VendorProfile';
import ListingDetail from './components/ListingDetail';
import { createMuiTheme } from '@material-ui/core/styles';
import CreateListing from './components/CreateListing';
import EditDetails from './components/EditDetails';
import EditField from './components/EditField';

function App() {
    const [splash, setSplash] = useState(true);
    const [user, setUser] = useState();
    const [listingToEdit, setListingToEdit] = useState();

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
                        component={() => (
                            <Home hideSplash={hideSplash} splash={splash} />
                        )}
                    />
                    <Route
                        exact
                        path="/login"
                        component={() => (
                            <AccountForm setUser={setUser} user={user} />
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
                    <Route
                        exact
                        path="/vendors/:vendorId/listings/:listingId"
                        render={routerProps => (
                            <ListingDetail
                                user={user}
                                match={routerProps.match}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/newlisting"
                        render={routerProps => {
                            return <CreateListing user={user} />;
                        }}
                    />
                    <Route
                        path="/edit/account"
                        exact
                        render={routerProps => (
                            <EditDetails
                                setListingToEdit={setListingToEdit}
                                editType="vendor"
                                user={user}
                                match={routerProps.match}
                            />
                        )}
                    />
                    <Route
                        path="/edit/listing/:id"
                        exact
                        render={routerProps => (
                            <EditDetails
                                setListingToEdit={setListingToEdit}
                                editType="listing"
                                user={user}
                                match={routerProps.match}
                            />
                        )}
                    />
                    <Route
                        path="/edit/account/:field/"
                        exact
                        render={routerProps => (
                            <EditField
                                editType="vendor"
                                details={user}
                                match={routerProps.match}
                                setUser={setUser}
                            />
                        )}
                    />
                    <Route
                        path="/edit/listing/:id/:field/"
                        exact
                        render={routerProps => (
                            <EditField
                                editType="listing"
                                details={listingToEdit}
                                match={routerProps.match}
                                setUser={setUser}
                            />
                        )}
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
