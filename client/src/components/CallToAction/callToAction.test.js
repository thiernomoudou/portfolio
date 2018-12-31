import React from 'react';
import { shallow } from 'enzyme';

import CallToAction from './index';

describe('CallToAction', () => {
  let cta;
  it('wraps the component inside a .call-to-action class', () => {
    cta = shallow(<CallToAction />);
    expect(cta.find('.call-to-action').length).toBe(1);
  });
  it('renders a button', () => {
    cta = shallow(<CallToAction />);
    expect(cta.find('.btn').length).toBe(1);
  });
  it('Button text is "Email Me"', () => {
    cta = shallow(<CallToAction />);
    expect(cta.find('.btn').text()).toBe('Email Me');
  });
});