import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Map from './Map';
import { makeStyles } from '@material-ui/core/styles';
import PublishIcon from '@material-ui/icons/Publish';
import { Link } from 'react-router-dom';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Button,
    Grid,
    IconButton,
    InputLabel
} from '@material-ui/core/';
import FoodListItem from './FoodListItem';

const useStyles = makeStyles(() => ({
    imageLabel: {
        height: 150,
        width: 150,
        borderRadius: '50%',
        margin: '30px auto',
        overflow: 'hidden',
        position: 'relative'
    },
    imageOverlay: {
        opacity: 0,
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(241,102,66, 0.6)',
        '&:hover': {
            opacity: 1
        }
    },
    container: {
        marginBottom: 100
    },
    fields: {},
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
    const [image, setImage] = useState();
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
        } else if (editType === 'listing') {
            // if type is listing, details should be of the listing of id in the url
            const listing = user.Listings.find(
                l => l.id === parseInt(match.params.id)
            );
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
        <Box className={classes.container}>
            <InputLabel
                className={classes.imageLabel}
                htmlFor="icon-button-file"
                style={{ background: `grey` }}
            >
                <IconButton
                    value={image}
                    name="image"
                    onChange={e => setImage(e.target.value)}
                    multiple
                    className={classes.icon}
                    aria-label="upload picture"
                    component="span"
                ></IconButton>
                <Box className={classes.imageOverlay}>
                    <PublishIcon style={{ fontSize: 32 }} color="white" />
                </Box>
            </InputLabel>
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
                                    component={Link}
                                    to={
                                        editType === 'listing'
                                            ? `/edit/listing/${details.id}/${field}`
                                            : `/edit/account/${field}`
                                    }
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
