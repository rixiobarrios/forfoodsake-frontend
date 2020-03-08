// import React from 'react';
// import Box from '@material-ui/core/Box';

// const VendorProfile = () => {
//     return (
//         <>
//             <img
//                 src="/images/home-placeholder.jpg"
//                 alt="vendor profile image"
//             />
//             <h2>Vendor Name</h2>
//             <p>Email: test@gmail.com</p>
//             <p>Address: 234 Happy St</p>
//             <p>Phone: (123)456-7890</p>
//             <p>Closing Time: 11 pm</p>
//             <p>Description</p>
//             <button type="submit">Delete Account</button>
//             <button type="submit">Update Account</button>
//         </>
//     );
// };

// export default VendorProfile;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
    img: {
        height: 180
    }
}));
const VendorProfile = () => {
    const classes = useStyles();
    return (
        <Box m={1}>
            <img
                src="/images/home-placeholder.jpg"
                alt="vendor profile image"
                className={classes.img}
            />
            <h2>Vendor Name</h2>
            <p>Email: test@gmail.com</p>
            <p>Address: 234 Happy St</p>
            <p>Phone: (123)456-7890</p>
            <p>Closing Time: 11 pm</p>
            <p>Description</p>
            <Button variant="outlined" color="secondary" href="/">
                Delete Account
            </Button>
            <Button variant="outlined" color="primary" href="/">
                Update Account
            </Button>
        </Box>
    );
};

export default VendorProfile;
