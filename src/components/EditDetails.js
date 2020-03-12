import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Map from './Map';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Button,
    Grid
} from '@material-ui/core/';
import FoodListItem from './FoodListItem';

const useStyles = makeStyles(() => ({
    fields: {
        marginBottom: 100
    },
    card: {
        marginBottom: 1
    },
    fieldName: {
        textTransform: 'capitalize'
    },
    field: {
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1.2rem'
    }
}));

const EditDetails = ({ editType, user, match }) => {
    const classes = useStyles();
    let history = useHistory();
    const [details, setDetails] = useState({});
    const fieldsToIgnore = useState([
        'id',
        'VendorId',
        'image',
        'createdAt',
        'updatedAt',
        'Listings'
    ]);
    useEffect(() => {
        if (!user) {
            history.push('/login');
        }
        if (editType === 'listing') {
            // if type is listing, details should be of the listing of id in the url
            const listing = user.Listings.find(l => l.id === match.params.id);
            setDetails(listing);
        } else {
            // otherwise, we are editing the user
            setDetails(user);
        }
        // return cleanUp();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match.params.id, editType, user]);
    // useEffect(() => {
    //     return cleanUp();
    // }, []);
    const cleanUp = () => {
        setDetails(null);
    };

    return details ? (
        <Box>
            <label htmlFor="image">
                <Box
                    style={{
                        background: details.image
                            ? `url(${details.image})`
                            : 'grey'
                    }}
                ></Box>
            </label>
            <Box className="fields">
                {Object.keys(details).map(field => {
                    if (!fieldsToIgnore[0].includes(field)) {
                        console.log(
                            fieldsToIgnore,
                            field,
                            fieldsToIgnore[0].includes(field)
                        );
                        return (
                            <Card className={classes.card}>
                                <CardActionArea
                                    key={field}
                                    className={classes.action}
                                >
                                    <CardContent className={classes.field}>
                                        <Typography
                                            className={classes.fieldName}
                                        >
                                            {field.replace(/_/g, ' ')}
                                        </Typography>
                                        <Typography
                                            className={classes.fieldValue}
                                        >
                                            {details[field]}
                                        </Typography>
                                    </CardContent>

                                    <CardMedia
                                        className={classes.cover}
                                        image={`${process.env.PUBLIC_URL}/images/home-placeholder.jpg`}
                                        title="placeholder image for vendor"
                                    />
                                </CardActionArea>
                            </Card>
                        );
                    } else {
                        return null;
                    }
                })}
            </Box>
        </Box>
    ) : (
        <Box className="none"></Box>
    );
};

export default EditDetails;
