import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VendorProfile from './VendorProfile';

afterEach(cleanup);

// test if user can view vendor page *** add data-testid="vendor-page" on box element on line 70
it('renders vendor profile page', () => {
  const { queryByTestId } = render(<VendorProfile />);

  expect(queryByTestId('vendor-page')).toBeTruthy;
  // expect(queryByTestId('vendor-page')).toBeTruthy();
});

// GET vendor by vendor id
test("should render selected vendor's profile page", () => {
  const url = `http://localhost:5000/api/vendors/1`
  const selectedVendor = "Dolly's Donuts";



const { queryByText } = render(<VendorProfile />);
expect(queryByText(selectedVendor)).toBe(`Dolly's Donuts`);

});

// DELETE vendor by vendor id


// GET listings by vendor id
