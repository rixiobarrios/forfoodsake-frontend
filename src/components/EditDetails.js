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

const EditDetails = ({ editType, user, match }) => {
    let history = useHistory();
    const [details, setDetails] = useState({});
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
                {Object.keys(details).map(field => (
                    <Box className="field">
                        <Typography className="fieldName">{field}</Typography>
                        <Typography className="fieldValue">
                            {details[field]}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    ) : (
        <Box className="none"></Box>
    );
};

export default EditDetails;
