import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  Box,
  FormControlLabel
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  form: {
    border: '1px solid black'
  },

  formContent: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px 20px',
    height: 130,
    margin: '0 auto'
  },
  tabs: {
    indicatorColor: 'blue',
    color: 'black'
  },
  //   submitLogin: {
  //     margin: '30px auto',
  //     width: 200,
  //     bottom: 100
  //   },
  tab: {
    height: '100%'
  },
  paper: {
    background: 'transparent'
  }
}));

export default function CreateListing({ user }) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  let history = useHistory();

  const createListing = () => {
    if (user.id) {
      const body = {
        name,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        vegan,
        vegetarian,
        description,
        image
      };
      fetch(`http://localhost:5000/api/listings/${user.id}/new`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res);
        history.push(`/vendors/${user.id}`);
      });
    } else {
      history.push('/login');
    }
  };

  return (
    <Box className={classes.formContent}>
      <FormGroup className={classes.form}>
        <FormControl>
          <InputLabel htmlFor="name">Item Name</InputLabel>
          <Input
            value={name}
            name="name"
            onChange={e => setName(e.target.value)}
            id="name"
            type="text"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            value={price}
            name="price"
            onChange={e => setPrice(e.target.value)}
            id="price"
            type="text"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="4">Quantity</InputLabel>
          <Input
            value={quantity}
            name="quantity"
            onChange={e => setQuantity(e.target.value)}
            id="quantity"
            type="text"
            aria-describedby="my-helper-text"
          />
        </FormControl>

        <FormControlLabel
          control={<Checkbox color="variant" />}
          label="Vegan"
          labelPlacement="end"
          onChange={e => {
            setVegan(e.target.checked);
            if (e.target.checked === true) {
              setVegetarian(true);
            }
          }}
        />
        <FormControlLabel
          control={<Checkbox color="variant" />}
          label="Vegetarian"
          labelPlacement="end"
          onChange={e => {
            setVegetarian(e.target.checked);
            if (e.target.checked === false) {
              setVegan(false);
            }
          }}
        />
        <FormControl>
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input
            value={description}
            name="description"
            onChange={e => setDescription(e.target.value)}
            type="textField"
            id="description"
          />
        </FormControl>
        <FormControlLabel control={<Input type="file" />} />
        <FormControl>
          <Button
            className={classes.submitLogin}
            variant="outlined"
            color="secondary"
            onClick={createListing}
          >
            Submit
          </Button>
        </FormControl>
      </FormGroup>
    </Box>
  );
}
