import React, { useState } from 'react';
import {
    FormControl,
    FormGroup,
    InputLabel,
    Input,
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
    form: {
        border: '1px solid black',
        height: 320,
        width: 310,
        background: '#fff'
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

const SignupForm = props => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.formContent}>
                <FormControl>
                    <InputLabel htmlFor="my-input1">Email</InputLabel>
                    <Input
                        error={!props.validEmail}
                        value={props.emailString}
                        onChange={e => props.setEmailString(e.target.value)}
                        id="my-input1"
                        type="email"
                        aria-describedby="my-helper-text"
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input2">Password</InputLabel>
                    <Input
                        error={!props.validPassword}
                        value={props.passwordString}
                        onChange={e => props.setPasswordString(e.target.value)}
                        type="password"
                        id="my-input2"
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input2">
                        Confirm password
                    </InputLabel>
                    <Input
                        error={!props.passwordMatch}
                        value={props.confirmPasswordString}
                        onChange={e =>
                            props.setConfirmPasswordString(e.target.value)
                        }
                        type="password"
                        id="my-input2"
                    />
                </FormControl>
            </Box>
            <FormControl>
                {props.signupStep === 1 ? (
                    <Button
                        className={classes.submitLogin}
                        variant="outlined"
                        color="secondary"
                        onClick={props.incrementSignup}
                    >
                        Continue
                    </Button>
                ) : (
                    <Button
                        className={classes.submitLogin}
                        variant="outlined"
                        color="secondary"
                        onClick={props.signUp}
                    >
                        Sign up
                    </Button>
                )}
            </FormControl>
        </>
    );
};

export default SignupForm;
