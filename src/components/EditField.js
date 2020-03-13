import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

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
import { withStyles, makeStyles } from '@material-ui/styles';

const states = require('./states.json');
const vendorTypes = ['Restaurant', 'Farm', 'Market'];
const numberFields = ['quantity', 'price', 'phone'];
const boolFields = ['vegan', 'vegetarian'];
const selectFields = ['state', 'type'];

const useStyles = makeStyles(theme => ({
    root: {
    margin: '100 auto',
    },
    value: {
    // border: '1px solid gray',
    // margin: '40% 25%',
    display: 'inline-flex',
    padding: 10,
    zIndex: 0,
    position: 'relative',
    minWidth: 0,
    flexDirection: 'column',
    verticalAlign: 'top',
    borderRadius: 5,
    },
}));

const EditField = ({ setUser, editType, user, match }) => {
    const classes = useStyles();
    let history = useHistory();
    const [value, setValue] = useState();
    const [selectValues, setSelectValues] = useState([]);

    useEffect(() => {
        if (editType === 'vendor') {
            setValue(user[match.params.field]);
        } else if (editType === 'listing') {
            let tempListing = user.Listings.find(
                listing => listing.id === parseInt(match.params.id)
            );
            console.log(user.Listings, tempListing, match.params.id);
            setValue(tempListing[match.params.field]);
        }
        switch (match.params.field) {
            case 'state':
                setSelectValues(states);
                break;
            case 'type':
                setSelectValues(vendorTypes);
                break;

            default:
                break;
        }
    }, [match.params.field]);

    const handleChange = e => {
        if (boolFields.includes(match.params.field)) {
            // checkboxes (true/false) if boolean field
            setValue(e.target.checked);
        } else {
            // value if other field
            setValue(e.target.value);
        }
    };

    const updateListing = () => {
        fetch(`http://localhost:5000/api/listings/${match.params.id}/edit`, {
            method: 'PUT',
            body: JSON.stringify({
                field: match.params.field,
                value: value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data);
                history.push(`/vendors/${user.id}`);
            })
            .catch(err => console.log(err));
    };
    const updateVendor = () => {
        fetch(`http://localhost:5000/api/vendors/${user.id}/edit`, {
            method: 'PUT',
            body: JSON.stringify({
                field: match.params.field,
                value: value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data);
                history.push(`/vendors/${user.id}`);
            })
            .catch(err => console.log(err));
    };

    const update = () => {
        if (editType === 'listing') {
            updateListing();
        } else if (editType === 'vendor') {
            updateVendor();
        }
    };
    if (selectFields.includes(match.params.field)) {
        return (
          <>
            <Link
              className={classes.back}
              to={
                editType === 'listing'
                  ? `/edit/listing/${match.params.id}`
                  : `/edit/account`
              }
            >
              <ArrowBackIosIcon />
              Back
            </Link>
            <FormControl className={classes.selectField}>
              <InputLabel>State</InputLabel>
              <Select value={value} onChange={e => setValue(e.target.value)}>
                {selectValues.map(option => (
                  <MenuItem
                    value={
                      match.params.field === 'state'
                        ? option.abbreviation
                        : option
                    }
                  >
                    {match.params.field === 'state' ? option.name : option}
                  </MenuItem>
                ))}
              </Select>
              <Button variant="outlined" color="secondary" onClick={update}>
                Update
              </Button>
            </FormControl>
          </>
        );
    } else {
        return (
            <>
                <Link
                    className={classes.back}
                    to={
                        editType === 'listing'
                            ? `/edit/listing/${match.params.id}`
                            : `/edit/account`
                    }
                >
                    <ArrowBackIosIcon />
                    Back
                </Link>
                <Box>
                    <FormControl>
                        <InputLabel htmlFor="user">
                            {match.params.field}
                        </InputLabel>
                        <Input
                            className={classes.value}
                            checked={value}
                            value={value}
                            onChange={handleChange}
                            // multiline if editing description
                            multiline={match.params.field === 'description'}
                            rows="4"
                            id="user"
                            type={
                                numberFields.includes(match.params.field)
                                    ? 'number'
                                    : boolFields.includes(match.params.field)
                                    ? 'checkbox'
                                    : 'text'
                            }
                            aria-describedby="my-helper-text"
                        />
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={update}
                        >
                            Update
                        </Button>
                    </FormControl>
                </Box>
            </>
        );
    }
};

export default EditField;
