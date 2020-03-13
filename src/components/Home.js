import React, { useState, useEffect } from 'react';
import Splash from './Splash';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Input,
    TextField
} from '@material-ui/core/';
import { createMuiTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { pink } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif'
    }
});

const useStyles = makeStyles(theme => ({
    search: {
        padding: 5
    },
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
        background: '#EDE9E7',
        minHeight: '100vh'
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
    const [filtered, setFiltered] = useState([]);
    const classes = useStyles();
    const theme = useTheme();
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        handleSubmit();
    }, [searchString]);

    const handleChange = e => {
        setSearchString(e.target.value);
    };
    const handleSubmit = () => {
        setFiltered(
            vendors.filter(vendor =>
                vendor.name.toLowerCase().match(searchString.toLowerCase())
            )
        );
    };

    useEffect(() => {
        console.log(process.env.REACT_APP_SERVER_URL);
        // fetch(`${process.env.REACT_APP_SERVER_URL}/vendors/`)
        fetch(`${process.env.REACT_APP_SERVER_URL}/vendors/`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVendors(data);
                setFiltered(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            {/*================SPLASH PAGE================*/}
            <Splash hideSplash={hideSplash} splash={splash} />
            <section id="home" className={splash ? 'home-hidden' : null}>
                <Box className={classes.container}>
                    <Input
                        value={searchString}
                        onChange={handleChange}
                        className={classes.search}
                        endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        id="filled-basic"
                    />
                    {filtered.map(vendor => {
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
                                        image={vendor.image}
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
