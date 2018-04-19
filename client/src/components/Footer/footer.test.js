import React from 'react';
import { shallow } from 'enzyme';

import Footer from './index';

describe('Footer', () => {
    let footer;
    let date = new Date;
    let year = date.getFullYear();
    it('wrap everything in a class named "footer"', () => {
        footer = shallow(<Footer />);
        expect(footer.find('.footer').length).toEqual(1);
    });
    it('renders the current year', () => {
        footer = shallow(<Footer />);
        expect(footer.find('p').text()).toContain(`${year}`);
    });
});