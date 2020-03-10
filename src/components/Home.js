import React, { useState } from 'react';
import Splash from './Splash';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { pink } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151,
    backgroundColor: pink
  }
}));

const Home = ({ hideSplash, splash }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Splash hideSplash={hideSplash} splash={splash} />
      <section id="home" className={splash ? 'home-hidden' : null}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                <Link to="/vendor">restaurant 1</Link>
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image="/public/images/home-placeholder.jpg"
            title="placeholder image for vendor"
          />
        </Card>

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Link to="/vendor">restaurant 2</Link>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image="home-placeholder.jpg"
          title="placeholder image for vendor"
        />

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Link to="/vendor">restaurant 3</Link>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image="home-placeholder.jpg"
          title="placeholder image for vendor"
        />

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Link to="/vendor">restaurant 4</Link>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image="home-placeholder.jpg"
          title="placeholder image for vendor"
        />

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Link to="/vendor">restaurant 5</Link>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image="home-placeholder.jpg"
          title="placeholder image for vendor"
        />
      </section>
    </>
  );
};

export default Home;

// import React, { useState } from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Splash from './Splash';

// const useStyles = makeStyles(theme => ({
//     // root: {
//     //   display: 'flex'
//     // },
//     details: {
//         display: 'flex',
//         flexDirection: 'column'
//     },
//     content: {
//         flex: '1 0 auto',
//         textAlign: 'left'
//     },
//     cover: {
//         width: '100%'
//     },
//     marginAutoContainer: {
//         width: '70%',
//         height: 100,
//         margin: 'auto',
//         display: 'flex',
//         overflow: 'hidden'

//         // height: 150
//     }
// }));

// export default function Home() {
//     const classes = useStyles();
//     const theme = useTheme();

//     const [splash, setSplash] = useState(true);

//     const hideSplash = () => {
//         setSplash(false);
//     };

//     return (
//         <>
//             <Splash hideSplash={hideSplash} splash={splash} />
//         <CardActionArea>
//         <CardActions>
//             <section id="home" className={splash ? 'home-hidden' : null}>
//                 <Grid className={classes.marginAutoContainer}>
//                     <Grid item xs={8} className={classes.details}>
//                         <CardContent className={classes.content}>
//                             <Typography component="h5" variant="h5">

//                                         <Link href="/vendor">
//                                             Vendor Name 1
//                                         </Link>

//                             </Typography>
//                             <Typography
//                                 variant="subtitle1"
//                                 color="textSecondary"
//                             >
//                                 123 Happy St Bronx, NY
//                             </Typography>
//                         </CardContent>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <img
//                             className={classes.cover}
//                             alt="placeholder vendor image"
//                             src="/images/home-placeholder.jpg"
//                         /></CardActions><CardActionArea>

//                     </Grid>
// {
/* </Grid>
                <Grid className={classes.marginAutoContainer}>
                    <Grid item xs={8} className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Vendor Name 2
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                123 Happy St Bronx, NY
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={4}>
                        <img
                            className={classes.cover}
                            alt="placeholder vendor image"
                            src="/images/home-placeholder.jpg"
                        />
                    </Grid>
                </Grid>
                <Grid spacing={2} className={classes.marginAutoContainer}>
                    <Grid item xs={8} className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Vendor Name 3
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                123 Happy St Bronx, NY
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={4}>
                        <img
                            className={classes.cover}
                            alt="placeholder vendor image"
                            src="/images/home-placeholder.jpg"
                        />
                    </Grid>
                </Grid> */
// }
// {
//     /* </section>
//         </>
//     );
// } */
// }
