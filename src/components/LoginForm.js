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

const LoginForm = ({ url }) => {
  const classes = useStyles();
  const [userString, setUserString] = useState('');
  const [passwordString, setPasswordString] = useState('');
  const [confirmPasswordString, setConfirmPasswordString] = useState('');
  const [formType, setFormType] = useState(1);
  const handleChange = (e, newValue) => {
    setFormType(newValue);
  };
  const [step, setStep] = useState(1);

  const signUp = e => {
    fetch(`http://localhost:5000/api/vendors/new`, {
      method: 'POST',
      body: JSON.stringify({
        name: userString,
        password: passwordString
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
  const logIn = e => {
    e.preventDefault();
    console.log('log in');
  };

  return (
    <Box className={classes.container}>
      <h2>Welcome to ForFoodSake</h2>
      <FormGroup className={classes.form}>
        <Tabs
          onChange={handleChange}
          value={formType}
          className={classes.tabs}
          variant="fullWidth"
        >
          <Tab label="Sign Up" className={classes.tab} />
          <Tab label="Log In" className={classes.tab} />
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
            onClick={formType ? logIn : signUp}
          >
            {formType ? 'Log In' : 'Continue'}
          </Button>
        </FormControl>
      </FormGroup>
    </Box>
  );
};

export default LoginForm;
