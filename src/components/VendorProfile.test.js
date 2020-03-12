import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VendorProfile from './VendorProfile';

afterEach(cleanup);

// test if user can view vendor page *** add data-testid="vendor-page" on box element on line 70
it('renders vendor profile page', () => {
  const { queryByTestId } = render(<VendorProfile />);

  expect(queryByTestId('vendor-page')).toBe(true);
  // expect(queryByTestId('vendor-page')).toBeTruthy();
});

// page should contain correct vendor name... test get
test("should render selected vendor's profile page", () => {
  const selectedVendor = "Dolly's Donuts";
  const { queryByText } = render(<VendorProfile />);

  expect(queryByText(selectedVendor)).toBe(`Dolly's Donuts`);
});

// page should delete correct vendor account... test delete
