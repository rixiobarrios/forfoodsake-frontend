import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Button,
    IconButton,
    InputLabel
} from '@material-ui/core/';

const EditDetails = ({ setUser, editType, user, match }) => {
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
    }, [match.params.id, editType, user]);

    const logOut = () => {
        setUser({});
        localStorage.removeItem('userId');
        history.push('/');
    };
    const deleteDetails = () => {
        fetch(
            `${process.env.REACT_APP_SERVER_URL}/${editType}s/${details.id}/delete`,
            {
                method: 'DELETE'
            }
        ).then(async res => {
            if (editType === 'vendor') {
                setUser({});
                history.push('/');
            } else {
                const response = await fetch(
                    `${process.env.REACT_APP_SERVER_URL}/vendors/${user.id}`
                );
                const data = await response.json();
                let tempData = data;
                delete tempData.password;
                setUser(tempData);
                history.push(`/vendors/${user.id}`);
            }
        });
    };

    return details.name ? (
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
                <Link
                    to={
                        editType === 'listing'
                            ? `/edit/listing/${details.id}/image`
                            : `/edit/account/image`
                    }
                    className={classes.imageOverlay}
                >
                    <PublishIcon style={{ fontSize: 32 }} color="white" />
                </Link>
            </InputLabel>
            <Box className="fields">
                {Object.keys(details).map(field => {
                    if (!fieldsToIgnore[0].includes(field)) {
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
            <Box className={classes.deleteContainer}>
                {editType === 'vendor' ? (
                    <Button
                        variant="contained"
                        className={classes.logout}
                        color="secondary"
                        onClick={logOut}
                        startIcon={<ExitToAppIcon />}
                    >
                        Log Out
                    </Button>
                ) : (
                    <Box></Box>
                )}

                <Button
                    variant="contained"
                    className={classes.delete}
                    color="secondary"
                    onClick={deleteDetails}
                    startIcon={<DeleteIcon />}
                >
                    {editType === 'listing'
                        ? 'Delete Listing'
                        : 'Delete Account'}
                </Button>
            </Box>
        </Box>
    ) : (
        <Box className="none"></Box>
    );
};

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
    fieldValue: {
        height: 25,
        maxWidth: 150,
        overflow: 'hidden'
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
    },
    deleteContainer: {
        marginTop: 40,
        paddingRight: 40,
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-around'
    },
    delete: {
        background: '#ff1c1c'
    },
    logout: {
        background: '#3b8dd1'
    }
}));

export default EditDetails;
