import React from 'react';
import { shallow } from 'enzyme';

import Contact from './index';
import contactTitle from './../../images/contact-title.svg';

describe('Contact', () => {
    let wrapper;
    it('has class contact-title', () => {
        wrapper = shallow(<Contact />);
        expect(wrapper.find('.contact-title').length).toEqual(1);
    });

    it('renders a Contact message image', () => {
        wrapper = shallow(<Contact />);
        expect(wrapper.find('img').prop('src')).toEqual(contactTitle);
    });
    
});