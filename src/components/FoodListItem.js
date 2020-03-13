import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core/';

const FoodListItem = ({ listing, vendor }) => {
  const classes = useStyles();
  return (
    <Card
      variant="outlined"
      className={classes.cardStyles}
      fontWeight="fontWeightBold"
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={listing.image}
          title="listing food"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${listing.name.substring(0, 11)}...`}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {`$ ${listing.price}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  img: {
    width: '100%'
  },
  cardStyles: {
    margin: '2%'
  },
  media: {
    height: 150,
    width: '100%'
  }
}));

export default FoodListItem;
