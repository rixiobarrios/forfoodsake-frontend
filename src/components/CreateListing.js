import React, { useState, useEffect } from 'react';
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
import Checkbox from '@material-ui/core/Checkbox';
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
    height: 400,
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
    width: 200,
    position: 'absolute',
    bottom: 100
  },
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
        if (user.id){
            const body = {
                name, price:parseFloat(price), quantity:parseInt(quantity) , vegan, vegetarian, description, image 
            } 
            fetch(`http://localhost:5000/api/listings/${user.id}/new`, {
              method: 'POST',
              body: JSON.stringify(body),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(res => console.log(res));
        } else {
            history.push('/login')
        }
    };

    return (
      <div>
        <FormGroup className={classes.form} >
          <Box className={classes.formContent}>
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
            <FormControl>
              <InputLabel htmlFor="vegan">Vegan</InputLabel>
              <Checkbox
                checked={vegan}
                name="vegan"
                onChange={e => {
                  setVegan(e.target.checked);
                  if (e.target.checked === true) {
                    setVegetarian(true);
                  }
                }}
                id="vegan"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="vegetarian">Vegetarian</InputLabel>
              <Checkbox
                checked={vegetarian}
                name="vegetarian"
                onChange={e => {
                  setVegetarian(e.target.checked);
                  if (e.target.checked === false) {
                    setVegan(false);
                  }
                }}
                id="vegetarian"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="description">Description</InputLabel>
              <Input
                value={description}
                name="description"
                onChange={e => setDescription(e.target.value)}
                type="text"
                id="description"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="image">Image</InputLabel>
              <Input
                value={image}
                name="image"
                onChange={e => setImage(e.target.value)}
                id="image"
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
              onClick={createListing}
            >
              {' '}
              Submit
            </Button>
          </FormControl>
        </FormGroup>
      </div>
    );
}
