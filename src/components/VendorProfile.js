import React, { useState, useEffect } from 'react';
import Map from './Map';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  IconButton,
  InputLabel
} from '@material-ui/core/';
import FoodListItem from './FoodListItem';
import { EditIcon } from '@material-ui/icons/Edit';

const VendorProfile = ({ match, user, setUser }) => {
  const [vendor, setVendor] = useState();

  console.log('match', match);
  useEffect(() => {
    // fetch(`${process.env.REACT_APP_SERVER_URL}/vendors/${match.params.id}`)
    fetch(`http://localhost:5000/api/vendors/${match.params.id}`)
      .then(res => res.json())
      .then(data => {
        setVendor(data);
      })
      .catch(err => console.error(err));
  }, [match.params.id]);

  const classes = useStyles();
  const deleteAccount = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/vendors/${user.id}/delete`, {
      method: 'DELETE'
    }).then(res => console.log(res));
  };

  if (vendor) {
    return (
      <Box className={classes.container}>
        <Box className={classes.imgContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/images/home-placeholder.jpg`}
            alt="vendor profile"
            className={classes.img}
          />
        </Box>
        <Box className={classes.vendorInfo}>
          <h2>{vendor.name}</h2>
          <a href={`mailto:${vendor.email}`}>{vendor.email}</a>
          <Typography className={classes.address}>
            {vendor.street}
            <br />
            {vendor.city} {vendor.state}
            <br />
            {vendor.zip_code}
          </Typography>
          <p>{vendor.phone}</p>
        </Box>
        <Box className={classes.description}>{vendor.description}</Box>
        <Map user={vendor} />
        {user && user.id === vendor.id ? (
          <Box>
            <Button
              variant="outlined"
              className={classes.delete}
              color="secondary"
              onClick={deleteAccount}
            >
              Delete Account
            </Button>
            {/* <Link to="/edit/account"> */}
            <InputLabel htmlFor="icon-button-file">
              <IconButton
                className={classes.icon}
                aria-label="upload picture"
                component={Link}
                to="/edit/account"
              >
                <EditIcon />
              </IconButton>
            </InputLabel>
            {/* </Link> */}
            {/* <Link to="/edit/account">
              <Button className={classes.update} variant="outlined" color="">
                Update Account
              </Button>
            </Link> */}
            <Link to="/newlisting">
              <Button
                className={classes.add}
                variant="outlined"
                color="primary"
              >
                Add listing
              </Button>
            </Link>
          </Box>
        ) : null}

        <Box className={classes.wrapper}>
          {vendor.Listings.map((listing, index) => (
            <Link
              to={`/vendors/${vendor.id}/listings/${listing.id}`}
              key={`${vendor.id}-${listing.id}`}
            >
              <FoodListItem
                key={(index, listing.name)}
                listing={listing}
                vendor={vendor}
              />
            </Link>
          ))}
        </Box>
      </Box>
    );
  } else {
    return <Box></Box>;
  }
};

const useStyles = makeStyles(() => ({
  container: {
    paddingBottom: 100,
    margin: '0 auto'
  },
  img: {
    width: '100%'
  },
  imgContainer: {
    width: '100%',
    height: 200,
    overflow: 'hidden'
  },
  vendorInfo: {
    borderBottom: '1px solid #bbb',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    margin: '0 auto',
    width: 'calc(100% - 4rem)'
  },
  address: {
    lineHeight: 1.4
  },
  description: {
    margin: '0 auto',
    fontSize: '1.2rem',
    lineHeight: '1.4',
    width: 'calc(100% - 4rem)',
    padding: '2rem 1rem'
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    margin: 'o auto',
    padding: '4%'
  },
  update: {
    margin: '2%',
    backgroundColor: '#b6d2c4'
  }
}));

export default VendorProfile;
