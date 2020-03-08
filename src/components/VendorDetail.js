// import React from 'react';
// import FoodListing from './FoodListing';
// import Map from './Map';

// const VendorDetail = () => {
//     return (
//         <>
//             <img src="" alt="restaurant Image" />
//             <h1>Restaurant 1</h1>
//             <p>123 Happy Street, New York, NY</p>
//             <p>(123)456-7890</p>
//             <p>This is the placeholder description for restaurant1.</p>
//             <Map />
//             <FoodListing />
//         </>
//     );
// };

// export default VendorDetail;

import React from 'react';
import FoodListing from './FoodListing';
import Map from './Map';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
});

export default function VendorDetail() {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image="/images/home-placeholder.jpg"
                    title="home-placeholder"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Restaurant 1
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        123 Happy Street, New York, NY (123)456-7890 This is the
                        placeholder description for restaurant1.
                    </Typography>
                </CardContent>
                <CardMedia>
                    <Map />
                </CardMedia>
            </Card>
            <CardMedia>
                <FoodListing />
            </CardMedia>
        </>
    );
}
