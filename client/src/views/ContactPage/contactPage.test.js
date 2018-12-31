
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/index';
import Contact from '../../components/Contact/index';
import Footer from '../../components/Footer/index';

import ContactPage from './index';


describe('ContactPage', () => {
  let wrapper;
  it('renders a <Navbar /> component', () => {
    wrapper = shallow(<ContactPage />);
    expect(wrapper.find(Navbar).length).toEqual(1);
  });
  it('renders a <Contact /> component', () => {
    wrapper = shallow(<ContactPage />);
    expect(wrapper.find(Contact).length).toEqual(1);
  });
  it('renders a <Footer /> component', () => {
    wrapper = shallow(<ContactPage />);
    expect(wrapper.find(Footer).length).toEqual(1);
  });
});
