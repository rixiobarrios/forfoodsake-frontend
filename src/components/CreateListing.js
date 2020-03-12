import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  Box,
  FormControlLabel,
  TextField,
  IconButton
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    '&.Mui-forcused fieldset': {
      borderColor: '#b6d2c4'
    },
    '& label.Mui-focused': {
      color: '#b6d2c4'
    },
    '& .MuiInput-underline:after': {
      borderColor: '#b6d2c4'
    },

    padding: '5%',
    borderRadius: '5px',
    backgroundColor: '#fff'
  },
  formContent: {
    margin: '0 auto',
    padding: '15px 20px',
    background: '#EDE9E7',
    height: '100vh'
  },
  newButton: {
    backgroundColor: '#b6d2c4'
  },
  submitLogin: {
    padding: '2% 30%'
  },
  icon: {
    color: '#b6d2c4'
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
      <FormGroup className={classes.root}>
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
            type="number"
            InputLabelProps={{ shrink: true }}
            value={quantity}
            name="quantity"
            onChange={e => setQuantity(e.target.value)}
            id="quantity"
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

        <TextField
          label="description"
          value={description}
          variant="outlined"
          name="description"
          onChange={e => setDescription(e.target.value)}
          multiline
          rows={4}
          type="text"
          id="description"
        />
        <Input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <InputLabel htmlFor="icon-button-file">
          <IconButton
            value={image}
            name="image"
            onChange={e => setImage(e.target.value)}
            multiple
            className={classes.icon}
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </InputLabel>
        <FormControl className={classes.submitLogin}>
          <Button
            className={classes.newButton}
            variant="outlined"
            onClick={createListing}
          >
            Submit
          </Button>
        </FormControl>
      </FormGroup>
    </Box>
  );
}
