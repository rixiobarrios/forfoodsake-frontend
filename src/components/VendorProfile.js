import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
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
    fontSize: '1.3rem',
    margin: '0 auto',
    width: 'calc(100% - 4rem)'
  },
  description: {
    margin: '0 auto',
    fontSize: '1.2rem',
    lineHeight: '1.4',
    width: 'calc(100% - 4rem)',
    padding: '1rem'
  }
}));

const VendorProfile = ({ match, user, setUser }) => {
  const [vendor, setVendor] = useState();
  console.log('match', match);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/vendors/${match.params.id}`)
      .then(res => res.json())
      .then(data => setVendor(data))
      .catch(err => console.error(err));
  }, [match.params.id]);

  const classes = useStyles();
  const deleteAccount = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/vendors/${user.id}/delete`, {
      method: 'DELETE'
    }).then(res => console.log(res));
  };
  const editAccount = () => {};

  if (vendor) {
    return (
      <Box>
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
          <div className={classes.address}>
            {vendor.street}
            <br />
            {vendor.city}
            <br />
            {vendor.state} {vendor.zipCode}
          </div>
          <p>{vendor.phone}</p>
        </Box>
        <Box className={classes.description}>{vendor.description}</Box>
        {user && user.id === vendor.id ? (
          <>
            <Button
              variant="outlined"
              color="secondary"
              onClick={deleteAccount}
            >
              Delete Account
            </Button>
            <Button variant="outlined" color="primary" onClick={editAccount}>
              Update Account
            </Button>
          </>
        ) : null}
      </Box>
    );
  } else {
    return <Box></Box>;
  }
};

export default VendorProfile;
