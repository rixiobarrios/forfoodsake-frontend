import React, { useState, useEffect } from 'react';
import Map from './Map';
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
import FoodListItem from './FoodListItem';

const useStyles = makeStyles(() => ({
    container: {
        paddingBottom: 100
    },
    pageContainer: {
        paddingBottom: 100
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
    }
}));

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
    const editAccount = () => {};

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
                <Map user={vendor} />
                {user && user.id === vendor.id ? (
                    <>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={deleteAccount}
                        >
                            Delete Account
                        </Button>
                        <Link to="/edit/account">
                            <Button variant="outlined" color="primary">
                                Update Account
                            </Button>
                        </Link>
                        <Link to="/newlisting">
                            <Button variant="outlined" color="primary">
                                Add listing
                            </Button>
                        </Link>
                    </>
                ) : null}
                <Box>
                    {vendor.Listings.map((listing, index) => (
                        <Link
                            to={`/vendors/${vendor.id}/listings/${listing.id}`}
                            key={vendor.id}
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

export default VendorProfile;
