import React from 'react';

const LoginForm = () => {
    return (
        <>
            <h2>Welcome to ForFoodSake</h2>
            <form>
                <input value="username"></input>
                <input value="passowrd"></input>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default LoginForm;
