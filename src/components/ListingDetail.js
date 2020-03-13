import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Map';
const useStyles = makeStyles({
    container: {
        paddingBottom: 100
    },
    mediaContainer: {
        width: '100%',
        height: 200,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 5
    },
    imgOverlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        background: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.2))',
        color: '#fff',
        fontSize: '1.5rem',
        padding: 20
    },
    media: {
        width: '100%'
    },
    listingInfo: {
        borderBottom: '1px solid #bbb',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        margin: '0 auto',
        width: 'calc(100% - 4rem)'
    },
    info1: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        maxWidth: 220
    },
    price: {
        fontSize: '1.2rem',
        transform: 'translateY(-5px)'
    },
    description: {
        margin: '0 auto',
        fontSize: '1.2rem',
        lineHeight: '1.4',
        width: 'calc(100% - 4rem)',
        padding: '2rem 1rem'
    }
});
const ListingDetail = ({ user, match }) => {
    const classes = useStyles();
    console.log(match);
    const [vendor, setVendor] = useState();
    const [listing, setListing] = useState();

    useEffect(() => {
        console.log('IS THIS WORKING');
        fetch(
            `${process.env.REACT_APP_SERVER_URL}/vendors/${match.params.vendorId}`
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVendor(data);
                setListing(
                    data.Listings.find(
                        listing =>
                            listing.id === parseInt(match.params.listingId)
                    )
                );
            })
            .catch(err => console.error(err));

        return cleanUp();
    }, [match.params.listingId, match.params.vendorId]);

    const cleanUp = () => {
        setVendor(null);
        setListing(null);
    };
    if (listing) {
        return (
            <Box className={classes.container}>
                <Box className={classes.mediaContainer}>
                    <Box className={classes.imgOverlay}>
                        <Link to={`/vendors/${vendor.id}`}>
                            <ArrowBackIosIcon
                                style={{
                                    transform: 'translateY(4px)',
                                    marginRight: -5
                                }}
                            />{' '}
                            {vendor.name}
                        </Link>
                    </Box>
                    <img
                        src={listing.image}
                        alt="food"
                        className={classes.media}
                    />
                </Box>
                <Box className={classes.listingInfo}>
                    <Box className={classes.info1}>
                        <Typography
                            className={classes.name}
                            gutterBottom
                            variant="h5"
                            component="h5"
                        >
                            {listing.name}
                        </Typography>
                        <Typography className={classes.price}>
                            ${listing.price}
                        </Typography>
                    </Box>
                    <Typography className={classes.closing}>
                        Pick up by {vendor.closing_time}
                    </Typography>
                    <Typography>
                        {vendor.street}, {vendor.city}, {vendor.state}{' '}
                        {vendor.zip_code}
                    </Typography>
                </Box>
                <Typography className={classes.description}>
                    {listing.description}
                </Typography>
                {vendor ? <Map user={vendor} /> : null}

                {user && user.id === listing.VendorId ? (
                    <>
                        <Button
                            variant="outlined"
                            color="secondary"
                            // onClick={deleteListing}
                        >
                            Delete Listing
                        </Button>
                        <Link to={`/edit/listing/${listing.id}`}>
                            <Button variant="outlined" color="primary">
                                Update Listing
                            </Button>
                        </Link>
                    </>
                ) : null}
            </Box>
        );
    } else {
        return null;
    }
};

export default ListingDetail;
