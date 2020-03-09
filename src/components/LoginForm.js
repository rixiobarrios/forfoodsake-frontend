// import React from 'react';
// import {
//     FormControl,
//     FormGroup,
//     InputLabel,
//     FormHelperText,
//     Input,
//     Button,
//     Box
// } from '@material-ui/core';

// const LoginForm = () => {
//     return (
//       <Box m={30}>
//         <h2>Welcome to ForFoodSake</h2>
//         <FormGroup>
//           <FormControl>
//             <InputLabel htmlFor="my-input1">username</InputLabel>
//             <Input id="my-input1" aria-describedby="my-helper-text" />
//             <FormHelperText id="my-helper-text">
//               We'll never show your email.
//             </FormHelperText>
//           </FormControl>
//           <FormControl>
//             <InputLabel htmlFor="my-input2">password</InputLabel>
//             <Input id="my-input2" />
//             <Button variant="outlined" color="secondary" href="/" type="submit">
//               Submit
//             </Button>
//           </FormControl>
//         </FormGroup>
//       </Box>
//     );
// };

// export default LoginForm;

import React from 'react';
import {
    FormControl,
    FormGroup,
    InputLabel,
    FormHelperText,
    Input,
    Button,
    Box
} from '@material-ui/core';

const LoginForm = () => {
    return (
        <Box m="10%">
            <h2>Welcome to ForFoodSake</h2>
            <FormGroup>
                <FormControl>
                    <InputLabel htmlFor="my-input1">username</InputLabel>
                    <Input id="my-input1" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">
                        We'll never show your email.
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input2">password</InputLabel>
                    <Input id="my-input2" />
                    <Button
                        variant="outlined"
                        color="secondary"
                        href="/"
                        type="submit"
                    >
                        Submit
                    </Button>
                </FormControl>
            </FormGroup>
        </Box>
    );
};

export default LoginForm;
