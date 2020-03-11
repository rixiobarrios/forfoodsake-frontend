import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/Styles';
import Map from './Map';
const useStyles = makeStyles({
    root: {
        maxWidth: 600
    },
    media: { maxHeight: 200 }
});
const ListingDetail = ({ match }) => {
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
            <Grid container direction="column" spacing={2}>
                <img
                    src="/images/food-placeholder.jpg"
                    alt="food"
                    className={classes.media}
                />
                <Typography gutterBottom variant="h5" component="h2">
                    Item Name
                </Typography>
                <Typography>Price: {listing.price}</Typography>
                <Typography>Description</Typography>
                <Typography>Pickup by 6:00 pm</Typography>
                <Typography>123 Happy St, New York, NY 00000</Typography>
                {vendor ? <Map user={vendor} /> : null}
            </Grid>
        );
    } else {
        return null;
    }
};

export default ListingDetail;
