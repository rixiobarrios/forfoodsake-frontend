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

const SignupForm = ({
  userString,
  passwordString,
  confirmPasswordString,
  setUserString,
  setPasswordString,
  setConfirmPasswordString,
  validName,
  validPassword,
  passwordMatch,
  signUp
}) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.formContent}>
        <FormControl>
          <InputLabel htmlFor="my-input1">Username</InputLabel>
          <Input
            error={!validName}
            value={userString}
            onChange={e => setUserString(e.target.value)}
            id="my-input1"
            type="text"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input2">Password</InputLabel>
          <Input
            error={!validPassword}
            value={passwordString}
            onChange={e => setPasswordString(e.target.value)}
            type="password"
            id="my-input2"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input2">Confirm password</InputLabel>
          <Input
            error={!passwordMatch}
            value={confirmPasswordString}
            onChange={e => setConfirmPasswordString(e.target.value)}
            type="password"
            id="my-input2"
          />
        </FormControl>
      </Box>
      <FormControl>
        <Button
          className={classes.submitLogin}
          variant="outlined"
          color="secondary"
          onClick={signUp}
        >
          Continue
        </Button>
      </FormControl>
    </>
  );
};

export default SignupForm;
