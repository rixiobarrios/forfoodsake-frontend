import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/styles';

const NavBar = props => {
    const classes = withStyles();
    const [value, setValue] = useState();
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                component={Link}
                to="/login"
                label="Login"
                icon={<VpnKeyIcon />}
            />
            <BottomNavigationAction
                component={Link}
                to="/"
                label="Home"
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                component={Link}
                to="/vendor-profile"
                label="Profile"
                icon={<PersonIcon />}
            />
        </BottomNavigation>
    );
};
export default NavBar;
