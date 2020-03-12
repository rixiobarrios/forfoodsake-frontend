import React from 'react';
import { FormControl, InputLabel, Button, Box } from '@material-ui/core';

const EditForm = ({ Update }) => {
    return (
        <>
            <Box>
                <FormControl>
                    <h2>Description</h2>
                    <InputLabel htmlFor="details">
                        Edit Description Here
                    </InputLabel>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={Update}
                    >
                        Update
                    </Button>
                </FormControl>
            </Box>
        </>
    );
};

export default EditField;
