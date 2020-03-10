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
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

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

const AccountForm = ({ url, setUser }) => {
  const [valid, setValid] = useState({
    username: true,
    password: true,
    passwordsMatch: true,
    verified: true
  });
  const [validName, setValidName] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);

  let history = useHistory();
  const classes = useStyles();
  const [userString, setUserString] = useState('');
  const [passwordString, setPasswordString] = useState('');
  const [confirmPasswordString, setConfirmPasswordString] = useState('');
  const [formType, setFormType] = useState(1);
  const changeTabs = (e, newValue) => {
    setFormType(newValue);
    // reset fields
    setUserString('');
    setPasswordString('');
    setConfirmPasswordString('');

    // reset errors
    setValidName(true);
    setValidPassword(true);
    setPasswordMatch(true);
  };
  const [signupStep, setSignupStep] = useState(1);
  const signUp = e => {
    e.preventDefault();
    // if username/password isnt empty, or password/confirm match
    if (
      userString &&
      passwordString &&
      passwordString === confirmPasswordString
    ) {
      // fetch(`${process.env.REACT_APP_SERVER_URL}/vendors/new`, {
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
        .then(data => {
          setUser(data);
          history.push('/');
        });
    } else {
      setValidName(!!userString); //true if string isnt empty
      setValidPassword(!!passwordString);
      setPasswordMatch(passwordString === confirmPasswordString);
    }
  };
  const logIn = e => {
    e.preventDefault();
    // if username and password aren't empty, and password and confirmPassword match
    console.log('check', userString, passwordString);
    if (userString && passwordString) {
      console.log('pass');
      fetch(`http://localhost:5000/api/vendors/login`, {
        method: 'POST',
        body: JSON.stringify({
          name: userString,
          password: passwordString
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res, err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(res);
          return res.json();
        })
        .then(data => {
          setUser(data);
          history.push('/');
        })
        .catch(err => console.error(err));
    } else {
      setValidName(!!userString); //true if string isnt empty
      setValidPassword(!!passwordString);
    }
  };

  return (
    <Box className={classes.container}>
      <h2>Welcome to ForFoodSake</h2>
      <FormGroup className={classes.form}>
        <Tabs
          onChange={changeTabs}
          value={formType}
          className={classes.tabs}
          variant="fullWidth"
        >
          <Tab label="Sign Up" className={classes.tab} />
          <Tab label="Log In" className={classes.tab} />
        </Tabs>
        {formType ? (
          <LoginForm
            userString={userString}
            passwordString={passwordString}
            setUserString={setUserString}
            setPasswordString={setPasswordString}
            validName={validName}
            validPassword={validPassword}
            logIn={logIn}
          />
        ) : (
          <SignupForm
            userString={userString}
            passwordString={passwordString}
            confirmPasswordString={confirmPasswordString}
            setUserString={setUserString}
            setPasswordString={setPasswordString}
            setConfirmPasswordString={setConfirmPasswordString}
            validName={validName}
            validPassword={validPassword}
            passwordMatch={passwordMatch}
            signUp={signUp}
          />
        )}
      </FormGroup>
    </Box>
  );
};

export default AccountForm;
