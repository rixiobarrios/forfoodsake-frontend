import React, { useState } from 'react';
import {
    FormControl,
    FormGroup,
    InputLabel,
    Input,
    FormHelperText,
    Button,
    Box,
    Tabs,
    Tab
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#EDE9E7'
    },
    tabIndicator: {},
    formContent: {
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '10px 20px',
        height: 130
    },
    tabs: {
        indicatorColor: 'blue',
        color: 'black'
    },
    submitLogin: {
        margin: '30px auto',
        width: 200
    },
    tab: {
        height: '100%'
    },
    paper: {
        background: 'transparent'
    }
}));

const LoginForm = ({
    emailString,
    passwordString,
    setEmailString,
    setPasswordString,
    validEmail,
    validPassword,
    logIn
}) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.formContent}>
                <FormControl error={!validEmail}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        value={emailString}
                        onChange={e => setEmailString(e.target.value)}
                        id="email"
                        type="text"
                        aria-describedby="my-helper-text"
                    />
                    {validEmail ? null : (
                        <FormHelperText>Please enter email</FormHelperText>
                    )}
                </FormControl>
                <FormControl error={!validPassword}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        value={passwordString}
                        onChange={e => setPasswordString(e.target.value)}
                        type="password"
                        id="password"
                    />
                    {validPassword ? null : (
                        <FormHelperText>Please enter password</FormHelperText>
                    )}
                </FormControl>
            </Box>
            <FormControl>
                <Button
                    className={classes.submitLogin}
                    variant="outlined"
                    color="secondary"
                    onClick={logIn}
                >
                    Log In
                </Button>
            </FormControl>
        </>
    );
};

export default LoginForm;
