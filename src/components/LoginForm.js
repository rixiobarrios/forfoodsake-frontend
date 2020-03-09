import React, { useState } from 'react';
import {
  FormControl,
  FormGroup,
  InputLabel,
  FormHelperText,
  Input,
  Button,
  Box,
  Tabs,
  Tab,
  Paper
} from '@material-ui/core';
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
    height: 310,
    width: 300,
    background: '#fff'
  },
  formContent: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px 20px',
    height: 130
  },
  tabs: {
    indicatorColor: '#ff0000',
    color: 'black'
  },
  submitLogin: {
    margin: '30px auto',
    width: 200
  },
  tab: {},
  paper: {
    background: 'transparent'
  }
}));

const LoginForm = () => {
  const classes = useStyles();
  const [userString, setUserString] = useState('');
  const [passwordString, setPasswordString] = useState('');
  const [confirmPasswordString, setConfirmPasswordString] = useState('');
  const [formType, setFormType] = useState(1);
  const handleChange = (e, newValue) => {
    setFormType(newValue);
  };

  const signUp = e => {
    e.preventDefault();
    console.log('sign up');
  };
  const logIn = e => {
    e.preventDefault();
    console.log('log in');
  };

  return (
    <Box className={classes.container}>
      <h2>Welcome to ForFoodSake</h2>
      <FormGroup
        onSubmit={e => {
          e.preventDefault();
          signUp(e);
        }}
        className={classes.form}
      >
        <Tabs
          onChange={handleChange}
          value={formType}
          className={classes.tabs}
          variant="fullWidth"
        >
          <Tab label="Sign Up" />
          <Tab label="Log In" />
        </Tabs>
        <Box className={classes.formContent}>
          <FormControl>
            <InputLabel htmlFor="my-input1">Username</InputLabel>
            <Input
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
              value={passwordString}
              onChange={e => setPasswordString(e.target.value)}
              type="password"
              id="my-input2"
            />
          </FormControl>
          {formType === 0 ? (
            <FormControl>
              <InputLabel htmlFor="my-input2">Confirm password</InputLabel>
              <Input
                value={confirmPasswordString}
                onChange={e => setConfirmPasswordString(e.target.value)}
                type="password"
                id="my-input2"
              />
            </FormControl>
          ) : null}
        </Box>
        <FormControl>
          <Button
            className={classes.submitLogin}
            variant="outlined"
            color="secondary"
            href="/"
            type="submit"
          >
            {formType ? 'Log In' : 'Sign Up'}
          </Button>
        </FormControl>
      </FormGroup>
    </Box>
  );
};

export default LoginForm;
