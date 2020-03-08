import React, { useState } from 'react';
import Splash from './Splash';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { pink } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    backgroundColor: pink,
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [splash, setSplash] = useState(true);

  const hideSplash = () => {
    setSplash(false);
  }

  
  

  return (
    <>
      <Splash hideSplash={hideSplash} splash={splash} />
      <section id="home" className={splash ? 'home-hidden' : null}>
      <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
              <a href="/vendor">restaurant 1</a>
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            // image="/public/images/home-placeholder.jpg"
            // title="placeholder image for vendor"
          />
      </Card>
      
          {/* <div className={classes.details}>
            <CardContent className={classes.content}>
              <a href="/vendor">restaurant 2</a>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image="home-placeholder.jpg"
            title="placeholder image for vendor"
          />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <a href="/vendor">restaurant 3</a>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image="home-placeholder.jpg"
            title="placeholder image for vendor"
          />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <a href="/vendor">restaurant 4</a>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image="home-placeholder.jpg"
            title="placeholder image for vendor"
          />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <a href="/vendor">restaurant 5</a>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image="home-placeholder.jpg"
            title="placeholder image for vendor"
          /> */}
        </section>
    </>
  );
};

export default Home;


{/* <Card className={classes.root}>
  <div className={classes.details}>
    <CardContent className={classes.content}>

    </CardContent>
  </div>
  <CardMedia
    className={classes.cover}
    image="/static/images/cards/live-from-space.jpg"
    title="Live from space album cover"
  />
</Card>; */}