import React from 'react';
import { shallow, mount } from 'enzyme';
import {Link} from 'react-router-dom';

import Greeting from './index';
import hello from './../../images/hello.svg';

describe('Greeting', () => {
    let wrapper;
    it('has class banner', () => {
        wrapper = shallow(<Greeting />);
        expect(wrapper.find('.welcome-message').length).toEqual(1);
    });
    it('renders 1 images', () => {
        wrapper = shallow(<Greeting />);
        expect(wrapper.find('img').length).toEqual(1);

    });
    it('renders a welcome image', () => {
        wrapper = shallow(<Greeting />);
        expect(wrapper.find('img').prop('src')).toEqual(hello);
    });
    
});