import React from 'react';
import FoodDetail from './FoodDetail';

const FoodListing = () => {
    return (
        <>
            {/* map through individual vendor listings and generate multiple listingDetail components */}
            <FoodDetail />
        </>
    );
};

export default FoodListing;
