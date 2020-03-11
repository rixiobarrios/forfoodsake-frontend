// import React from 'react';
// import Map from './Map';

// const ListingDetail = () => {
//     return (
//         <>
//             <img src="" alt="food-image" />
//             <h2>Item Name</h2>
//             <p>Price: $0</p>
//             <p>Pickup by: 6 pm</p>
//             <p>Address: 123 Happy St</p>
//             <Map />
//             <p>Description</p>
//         </>
//     );
// };

// export default ListingDetail;

// import React from 'react';
// import Map from './Map';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345
//     },
//     media: {
//         height: 140
//     }
// });

// export default function FoodDetail() {
//     const classes = useStyles();

//     return (
//         <Card className={classes.root}>
//             <CardMedia
//                 className={classes.media}
//                 image="/images/food-placeholder.jpg"
//                 title="food-detail"
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                     Food Detail, Price: $0,00
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                     Quantity: 2
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                     Description: I am food
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                     Pickup by: 6 pm
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                     Address: 123 Happy St, New York, NY 00000
//                 </Typography>
//             </CardContent>
//             <Map />
//         </Card>
//     );
// }

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
    console.log(match)
    const [vendor, setVendor] = useState(0);
    const [listing, setListing] = useState(0)
    useEffect(() => {
        console.log('IS THIS WORKING')
        fetch(`http://localhost:5000/api/vendors/${match.vendorId}`)
          .then(res => res.json()).then(data => {
              console.log(data)
              setVendor(data);
              setListing(
                data.Listings.find(
                  listing => listing.id === parseInt(match.listingId)
                )
              );
          })

        
    }, [])


    return (
        <Grid container direction="column" spacing={2}>
            <img
                src="/images/food-placeholder.jpg"
                alt="food-image"
                className={classes.media}
            />
            <Typography gutterBottom variant="h5" component="h2">
                Item Name
            </Typography>
            <Typography>Price: $0.00</Typography>
            <Typography>Description</Typography>
            <Typography>Pickup by 6:00 pm</Typography>
            <Typography>123 Happy St, New York, NY 00000</Typography>
            {/* <Map user={vendor}/> */}
        </Grid>
    );
};

export default ListingDetail;
