import React, { useState, useEffect } from 'react';
import Splash from './Splash';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box
} from '@material-ui/core/';
import { createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif'
    }
});

const useStyles = makeStyles(theme => ({
    card: {
        margin: '10px 0'
    },
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 120
    },
    container: {
        padding: '10px 10px 100px 10px',
        background: '#EDE9E7'
    },
    content: {
        width: 200
    },
    cover: {
        width: 151,
        backgroundColor: pink
    }
}));

const Home = ({ hideSplash, splash }) => {
    const [vendors, setVendors] = useState([]);
    const classes = useStyles();
    const theme = useTheme();

    useEffect(() => {
        console.log(process.env.REACT_APP_SERVER_URL);
        // fetch(`${process.env.REACT_APP_SERVER_URL}/vendors/`)
        fetch(`http://localhost:5000/api/vendors/`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVendors(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            {/*================SPLASH PAGE================*/}
            <Splash hideSplash={hideSplash} splash={splash} />
            <section id="home" className={splash ? 'home-hidden' : null}>
                <Box className={classes.container}>
                    {vendors.map(vendor => {
                        return (
                            <CardActionArea
                                key={vendor.id}
                                className={classes.card}
                                component={Link}
                                to={`/vendors/${vendor.id}`}
                            >
                                <Card className={classes.root}>
                                    <CardContent className={classes.content}>
                                        <Typography component="h5" variant="h5">
                                            {vendor.name}
                                        </Typography>
                                        <Typography>
                                            {vendor.street}, {vendor.city},{' '}
                                            {vendor.state}
                                        </Typography>
                                    </CardContent>

                                    <CardMedia
                                        className={classes.cover}
                                        image={`${process.env.PUBLIC_URL}/images/home-placeholder.jpg`}
                                        title="placeholder image for vendor"
                                    />
                                </Card>
                            </CardActionArea>
                        );
                    })}
                </Box>
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
