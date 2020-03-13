import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
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
  },
  media: {
    height: 200,
    border: '1px solid black'
    // display: 'flex'
  },
  flexed: {
    display: 'flex'
  }
}));

const FoodListItem = ({ listing, vendor }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={4}>
        <Card variant="outlined" className={classes.flexed}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={listing.image}
              title="listing food"
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
    </>
  );
};

export default FoodListItem;
