import React from 'react';
import { shallow } from 'enzyme';

import SingleProject from './index';
import contactTitle from './../../images/contact-title.svg';

describe('Single Project', () => {
    let wrapper;
    it('has class project-description', () => {
        wrapper = shallow(<SingleProject />);
        expect(wrapper.find('.project-description').length).toEqual(1);
    });

    it('renders a description image', () => {
        wrapper = shallow(<SingleProject />);
        expect(wrapper.find('img').length).toEqual(1);
    });
    
});