
import React from 'react';
import { shallow, mount } from 'enzyme';

import Navbar from './../../../components/Navbar/index';
import Greeting from './../../../components/Greeting/index';
import Banner from './../../../components/Banner/index';

import HomePage from './../index';


describe('Navbar', () => {
    let wrapper;
    it('has a logo', () => {
        wrapper = shallow(<Navbar />);
        expect(wrapper.find('.navbar-brand').length).toEqual(1);
    });
});