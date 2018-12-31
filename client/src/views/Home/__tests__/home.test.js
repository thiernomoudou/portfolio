
import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../../../components/Navbar/index';
import Greeting from '../../../components/Greeting/index';
import Banner from '../../../components/Banner/index';
import Presentation from '../../../components/Presentation/index';
import CallToAction from '../../../components/CallToAction/index';
import Footer from '../../../components/Footer/index';

import HomePage from '../index';


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
  it('renders a <Presentation /> component', () => {
    wrapper = shallow(<HomePage />);
    expect(wrapper.find(Presentation).length).toEqual(1);
  });
  it('renders a <Presentation /> component', () => {
    wrapper = shallow(<HomePage />);
    expect(wrapper.find(CallToAction).length).toEqual(1);
  });
  it('renders a <Footer /> component', () => {
    wrapper = shallow(<HomePage />);
    expect(wrapper.find(Footer).length).toEqual(1);
  });
});
