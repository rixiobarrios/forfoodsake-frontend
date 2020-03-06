import React from 'react';
import { Link } from 'react-router-dom';

const ListingDetail = () => {
  return (
    <>
      <Link to="/listing">
        <h1>Food name</h1>
      </Link>
      <img src="" alt="food image" />
      <p>price $$$$</p>
    </>
  );
};

export default ListingDetail;
