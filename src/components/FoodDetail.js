import React from 'react';
import { Link } from 'react-router-dom';

const FoodDetail = () => {
    return (
        <>
            {/* change id to dynamic route */}
            <Link to="/listing/id">
                <h1>Food Detail</h1>
            </Link>
            <img src="" alt="food image" />
            <p>price $$$$</p>
        </>
    );
};

export default FoodDetail;
