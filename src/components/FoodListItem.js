import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid
} from '@material-ui/core/';

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

const FoodDetail = ({ listing }) => {
     const classes = useStyles();
    return (
      <>
        <Link
          to={`vendors/${vendor.id}/listings/${listing.id}`}
          key={vendor.id}
        >
          <Grid>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.CardMedia}
                    src={classes.image}
                    title="listing food picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {listing.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      ${listing.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Link>
      </>
    );
};

export default FoodDetail;
