
import React from 'react';
import { shallow, mount } from 'enzyme';
import {Link} from 'react-router-dom';

import Navbar from './../../../components/Navbar/index';
import Greeting from './../../../components/Greeting/index';
import Banner from './../../../components/Banner/index';

import HomePage from './../index';


describe('HomePage', () => {
    let wrapper;
    it('renders a <Navbar /> component', () => {
        wrapper = shallow(<HomePage />);
        expect(wrapper.find(Navbar).length).toEqual(1);
    });
    it('renders a <Banner /> component', () => {
        wrapper = shallow(<HomePage />);
        expect(wrapper.find(Banner).length).toEqual(1);
    });
    it('renders a <Greeting /> component', () => {
        wrapper = shallow(<HomePage />);
        expect(wrapper.find(Greeting).length).toEqual(1);
    });
});