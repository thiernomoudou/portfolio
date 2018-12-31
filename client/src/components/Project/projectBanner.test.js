import React from 'react';
import { shallow } from 'enzyme';

import ProjectBanner from './index';


describe('Project Banner', () => {
  let wrapper;
  it('', () => {
    wrapper = shallow(<ProjectBanner />);
    expect(wrapper.find('.contact-title').length).toEqual(1);
  });

});