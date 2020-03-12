import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
    FormControl,
    InputLabel,
    Input,
    Select,
    Button,
    Box
} from '@material-ui/core';

const EditField = ({ setUser, editType, details, match }) => {
    let history = useHistory();
    const [value, setValue] = useState();
    const numberFields = ['quantity', 'price', 'phone'];
    const boolFields = ['vegan', 'vegetarian'];

    useEffect(() => {
        if (boolFields.includes(match.params.field)) {
            setValue(details[match.params.field]);
        } else {
            setValue(details[match.params.field]);
        }
    }, []);

    const handleChange = e => {
        if (boolFields.includes(match.params.field)) {
            // checkboxes (true/false) if boolean field
            setValue(e.target.checked);
        } else {
            // value if other field
            setValue(e.target.value);
        }
    };

    const updateListing = () => {};
    const updateVendor = () => {
        fetch(`http://localhost:5000/api/vendors/${details.id}/edit`, {
            method: 'PUT',
            body: JSON.stringify({
                field: match.params.field,
                value: value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data);
                history.push(`/vendors/${data.id}`);
            });
    };

    const update = () => {
        if (editType === 'listing') {
            updateListing();
        } else if (editType === 'vendor') {
            updateVendor();
        }
    };
    if (false) {
    } else {
        return (
            <>
                <Box>
                    <FormControl>
                        <InputLabel htmlFor="details">
                            {match.params.field}
                        </InputLabel>
                        <Input
                            checked={value}
                            value={value}
                            onChange={handleChange}
                            // multiline if editing description
                            multiline={match.params.field === 'description'}
                            rows="4"
                            id="details"
                            type={
                                numberFields.includes(match.params.field)
                                    ? 'number'
                                    : boolFields.includes(match.params.field)
                                    ? 'checkbox'
                                    : 'text'
                            }
                            aria-describedby="my-helper-text"
                        />
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={update}
                        >
                            Update
                        </Button>
                    </FormControl>
                </Box>
            </>
        );
    }
};

export default EditField;
