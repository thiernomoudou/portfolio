import React from 'react';
import { shallow, mount } from 'enzyme';
import {Link} from 'react-router-dom';

import Navbar from './../../components/Navbar/index';
import ProjectBanner from './../../components/Project/index';
import Footer from './../../components/Footer/index';

import ProjectPage from './index';


describe('ContactPage', () => {
    let wrapper;
    it('renders a <Navbar /> component', () => {
        wrapper = shallow(<ProjectPage />);
        expect(wrapper.find(Navbar).length).toEqual(1);
    });
    it('renders a <Contact /> component', () => {
        wrapper = shallow(<ProjectPage />);
        expect(wrapper.find(ProjectBanner).length).toEqual(1);
    });
    it('renders a <Footer /> component', () => {
        wrapper = shallow(<ProjectPage />);
        expect(wrapper.find(Footer).length).toEqual(1);
    });
});