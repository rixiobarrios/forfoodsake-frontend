import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import FoodListItem from './FoodListItem';

it('should render the information specific to the listing', async () => {
  const vendor = {
    id: 1
  };
  const listing = {
    id: '3'
  };
  render(<FoodListItem listing={listing} vendor={vendor} />);
});
