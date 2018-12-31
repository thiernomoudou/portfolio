import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Navbar from './index';

describe('Navbar', () => {
  let wrapper;
  it('has a logo', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper.find('.navbar-brand').length).toEqual(1);
  });
  it('The logo is controlled by additionnal css', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper.find('.app-logo').length).toEqual(1);
  });
  it('The Navbar has  a 1 logo and 4 menu links', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper.find(Link).length).toEqual(5);
  });
  it('renders a toogler buttons for mobiles', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper.find('.navbar-toggler').length).toEqual(1);
  });
  it('The first nav item is "Home"', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper.find('.nav-item').children().at(0).text()).toBe('Home');
  });
  it('The second nav item is "Projects"', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper.find('.nav-item').children().at(2).text()).toBe('Projects');
  });
  it('The third nav item is "Blog"', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper.find('.nav-item').children().at(3).text()).toBe('Blog');
  });
  it('The fourth nav item  is "Contact"', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper.find('.nav-item').children().at(4).text()).toBe('Contact');
  });
});