import React from 'react';
import { NavBar } from './NavBar';
import {
    act,
    renderHook,
    render,
    fireEvent,
    cleanup
} from '@testing-library/react-hooks';
import { shallow } from 'enzyme';

import NavBar from './NavBar';

describe('NavBar component', () => {
    it('should render', () => {
        const component = shallow(<NavBar />);
        expect(component.find(`/vendors/${user.id}`).length).toBe(1);
    });
});
w;
