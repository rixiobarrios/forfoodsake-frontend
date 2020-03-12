import React, { useState } from 'react';
import {
    FormControl,
    FormGroup,
    InputLabel,
    Input,
    Select,
    MenuItem,
    FormHelperText,
    Button,
    Box,
    Tabs,
    Tab
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/styles';
const states = require('./states.json');

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
        minHeight: 320,
        width: 310,
        background: '#fff'
    },
    inputField: {
        marginBottom: 20
    },
    selectField: {
        marginBottom: 20
    },
    formContent: {
        maxWidth: '100%',
        padding: '15px 20px',
        minHeight: 140,
        display: 'flex',
        flexDirection: 'column'
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
    if (props.signupStep === 1) {
        return (
            <>
                <Box className={classes.formContent}>
                    <FormControl
                        error={!props.validEmail}
                        className={classes.inputField}
                    >
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            value={props.emailString}
                            onChange={e => props.setEmailString(e.target.value)}
                            id="email"
                            type="email"
                            aria-describedby="my-helper-text"
                        />
                        {props.validEmail ? null : (
                            <FormHelperText>Please enter email</FormHelperText>
                        )}
                    </FormControl>
                    <FormControl
                        error={!props.validPassword}
                        className={classes.inputField}
                    >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            value={props.passwordString}
                            onChange={e =>
                                props.setPasswordString(e.target.value)
                            }
                            type="password"
                            id="password"
                        />
                        {props.validPassword ? null : (
                            <FormHelperText>
                                Please enter password
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl
                        error={!props.passwordMatch}
                        className={classes.inputField}
                    >
                        <InputLabel htmlFor="confirmPassword">
                            Confirm password
                        </InputLabel>
                        <Input
                            value={props.confirmPasswordString}
                            onChange={e =>
                                props.setConfirmPasswordString(e.target.value)
                            }
                            type="password"
                            id="confirmPassword"
                        />
                        {props.passwordMatch ? null : (
                            <FormHelperText>
                                Passwords must match
                            </FormHelperText>
                        )}
                    </FormControl>
                </Box>
                <FormControl>
                    <Button
                        className={classes.submitLogin}
                        variant="outlined"
                        color="secondary"
                        onClick={props.incrementSignup}
                    >
                        Continue
                    </Button>
                </FormControl>
            </>
        );
    } else if (props.signupStep === 2) {
        return (
            <>
                <Box className={classes.formContent}>
                    <FormControl className={classes.inputField}>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input
                            error={!props.validName}
                            value={props.nameString}
                            onChange={e => props.setNameString(e.target.value)}
                            id="name"
                            type="text"
                            aria-describedby="my-helper-text"
                        />
                    </FormControl>
                    <FormControl className={classes.inputField}>
                        <InputLabel htmlFor="phone">Phone Number</InputLabel>
                        <Input
                            value={props.phoneString}
                            onChange={e => props.setPhoneString(e.target.value)}
                            type="number"
                            id="phone"
                        />
                    </FormControl>
                    <FormControl
                        error={!props.validType}
                        className={classes.selectField}
                    >
                        <InputLabel htmlFor="type">Type</InputLabel>
                        <Select
                            value={props.typeString}
                            onChange={e => props.setTypeString(e.target.value)}
                            id="type"
                        >
                            <MenuItem value="Restaurant">Restaurant</MenuItem>
                            <MenuItem value="Farm">Farm</MenuItem>
                            <MenuItem value="Market">Market</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <FormControl>
                    <Button
                        className={classes.submitLogin}
                        variant="outlined"
                        color="secondary"
                        onClick={props.incrementSignup}
                    >
                        Continue
                    </Button>
                </FormControl>
            </>
        );
    } else if (props.signupStep === 3) {
        return (
            <>
                <Box className={classes.formContent}>
                    <FormControl className={classes.inputField}>
                        <InputLabel htmlFor="street">Street</InputLabel>
                        <Input
                            value={props.streetString}
                            onChange={e =>
                                props.setStreetString(e.target.value)
                            }
                            id="street"
                            type="text"
                            aria-describedby="my-helper-text"
                        />
                    </FormControl>
                    <FormControl className={classes.inputField}>
                        <InputLabel htmlFor="city">City</InputLabel>
                        <Input
                            value={props.cityString}
                            onChange={e => props.setCityString(e.target.value)}
                            id="city"
                            type="text"
                            aria-describedby="my-helper-text"
                        />
                    </FormControl>
                    <FormControl className={classes.selectField}>
                        <InputLabel htmlFor="state">State</InputLabel>
                        <Select
                            value={props.stateString}
                            onChange={e => props.setStateString(e.target.value)}
                            id="state"
                        >
                            {states.map(state => (
                                <MenuItem value={state.abbreviation}>
                                    {state.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.inputField}>
                        <InputLabel htmlFor="zipCode">Zip Code</InputLabel>
                        <Input
                            value={props.zipCodeString}
                            onChange={e =>
                                props.setZipCodeString(e.target.value)
                            }
                            id="zipCode"
                            type="text"
                            aria-describedby="my-helper-text"
                        />
                    </FormControl>
                </Box>
                <FormControl>
                    <Button
                        className={classes.submitLogin}
                        variant="outlined"
                        color="secondary"
                        onClick={props.incrementSignup}
                    >
                        Continue
                    </Button>
                </FormControl>
            </>
        );
    } else if (props.signupStep === 4) {
        return (
            <>
                <Box className={classes.formContent}>
                    <FormControl className={classes.inputField}>
                        <InputLabel htmlFor="description">
                            Description
                        </InputLabel>
                        <Input
                            value={props.descriptionString}
                            onChange={e =>
                                props.setDescriptionString(e.target.value)
                            }
                            multiline
                            rows="4"
                            id="description"
                            type="text"
                            aria-describedby="my-helper-text"
                        />
                    </FormControl>
                </Box>
                <FormControl>
                    <Button
                        className={classes.submitLogin}
                        variant="outlined"
                        color="secondary"
                        onClick={props.signUp}
                    >
                        Sign Up
                    </Button>
                </FormControl>
            </>
        );
    } else {
        return <Box>{props.signupStep}</Box>;
    }
};

export default SignupForm;