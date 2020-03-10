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
  // Account info fields
  const [emailString, setEmailString] = useState('');
  const [passwordString, setPasswordString] = useState('');
  const [nameString, setNameString] = useState('');
  const [confirmPasswordString, setConfirmPasswordString] = useState('');
  const [streetString, setStreetString] = useState('');
  const [cityString, setCityString] = useState('');
  const [stateString, setStateString] = useState('');
  const [zipCodeString, setZipCodeString] = useState('');
  const [typeString, setTypeString] = useState('');
  const [phoneString, setPhoneString] = useState('');
  const [descriptionString, setDescriptionString] = useState('');
  const [imageString, setImageString] = useState('');
  const [closingString, setClosingString] = useState('');

  // Validation
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validCity, setValidCity] = useState(true);
  const [validState, setValidState] = useState(true);
  const [validZipCode, setValidZipCode] = useState(true);
  const [validType, setValidType] = useState(true);
  const [validStreet, setValidStreet] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const [validDescription, setValidDescription] = useState(true);
  const [validImage, setValidImage] = useState(true);
  const [validClosing, setValidClosing] = useState(true);
  // Switch between login and signup
  const [formType, setFormType] = useState(1);
  let history = useHistory();
  const classes = useStyles();

  // Signup steps
  const [signupStep, setSignupStep] = useState(1);
  const incrementSignup = () => {
    setSignupStep(signupStep + 1);
  };

  const changeTabs = (e, newValue) => {
    setFormType(newValue);
    // reset fields
    setEmailString('');
    setPasswordString('');
    setConfirmPasswordString('');

    setSignupStep(1);

    // reset errors
    setValidEmail(true);
    setValidPassword(true);
    setPasswordMatch(true);
  };
  const signUp = e => {
    e.preventDefault();
    // if username/password isnt empty, or password/confirm match
    if (
      emailString &&
      passwordString &&
      passwordString === confirmPasswordString
    ) {
      // fetch(`${process.env.REACT_APP_SERVER_URL}/vendors/new`, {
      fetch(`http://localhost:5000/api/vendors/new`, {
        method: 'POST',
        body: JSON.stringify({
          email: emailString,
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
      setValidEmail(!!emailString); //true if string isnt empty
      setValidPassword(!!passwordString);
      setPasswordMatch(passwordString === confirmPasswordString);
    }
  };
  const logIn = e => {
    e.preventDefault();
    // if email and password aren't empty, and password and confirmPassword match
    console.log('check', emailString, passwordString);
    if (emailString && passwordString) {
      console.log('pass');
      fetch(`http://localhost:5000/api/vendors/login`, {
        method: 'POST',
        body: JSON.stringify({
          email: emailString,
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
      setValidEmail(!!emailString); //true if string isnt empty
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
            emailString={emailString}
            passwordString={passwordString}
            setEmailString={setEmailString}
            setPasswordString={setPasswordString}
            validEmail={validEmail}
            validPassword={validPassword}
            logIn={logIn}
          />
        ) : (
          <SignupForm
            // fields
            emailString={emailString}
            passwordString={passwordString}
            confirmPasswordString={confirmPasswordString}
            nameString={nameString}
            streetString={streetString}
            cityString={cityString}
            stateString={stateString}
            zipCodeString={zipCodeString}
            typeString={typeString}
            phoneString={phoneString}
            descriptionString={descriptionString}
            imageString={imageString}
            closingString={closingString}
            // set fields
            setEmailString={setEmailString}
            setPasswordString={setPasswordString}
            setConfirmPasswordString={setConfirmPasswordString}
            setNameString={setNameString}
            setStreetString={setStreetString}
            setCityString={setCityString}
            setStateString={setStateString}
            setZipCodeString={setZipCodeString}
            setTypeString={setTypeString}
            setPhoneString={setPhoneString}
            setDescriptionString={setDescriptionString}
            setImageString={setImageString}
            setClosingString={setClosingString}
            // validation
            validEmail={validEmail}
            validName={validName}
            validPassword={validPassword}
            passwordMatch={passwordMatch}
            // else
            signUp={signUp}
            signupStep={signupStep}
            incrementSignup={incrementSignup}
          />
        )}
      </FormGroup>
    </Box>
  );
};

export default AccountForm;
