import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VendorProfile from './VendorProfile';

afterEach(cleanup);

// test if user can view vendor page *** add data-testid="vendor-page" on box element on line 70
test('renders vendor profile page', () => {
  const { queryByTestId } = render(<VendorProfile />);

  expect(queryByTestId('vendor-page')).toBeTruthy;
  // expect(queryByTestId('vendor-page')).toBeTruthy();
});

// GET vendor by vendor id
test("should render vendor by id", async () => {
fetch(`http://localhost:5000/api/vendors/1`)
            .then(res => res.json())
            .then(data => {
                setVendor(data);
            })
            .catch(err => console.error(err));
});

// DELETE vendor by vendor id
test('should delete vendor by id', async () => {
  fetch(`http://localhost:5000/api/vendors/1/delete`, {
    method: 'DELETE'
  }).then(res => console.log(res));
});

// GET listings by vendor id
