import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

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
const VendorProfile = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.imgContainer}>
        <img
          src="/images/home-placeholder.jpg"
          alt="vendor profile"
          className={classes.img}
        />
      </Box>
      <Box className={classes.vendorInfo}>
        <h2>Vendor Name</h2>
        <a href="mailto:test@gmail.com">test@gmail.com</a>
        <div className={classes.address}>
          234 Happy St
          <br />
          Bronx
          <br />
          NY 00000
        </div>
        <p>(123) 456-7890</p>
      </Box>
      <Box className={classes.description}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ducimus
        magnam corrupti vel corporis omnis cumque beatae nemo distinctio dolorum
        molestiae, optio soluta aliquam debitis.
      </Box>
      <Button variant="outlined" color="secondary" href="/">
        Delete Account
      </Button>
      <Button variant="outlined" color="primary" href="/">
        Update Account
      </Button>
    </Box>
  );
};

export default VendorProfile;
