import React from 'react';
import { shallow } from 'enzyme';

import Presentation from './index';

describe('Presentation', () => {
  let presentation;
  it('have 2 h2', () => {
    presentation = shallow(<Presentation />);
    expect(presentation.find('h2').length).toBe(2)
  });
  it('have a h2 that rendere "Who I am"', () => {
    presentation = shallow(<Presentation />);
    expect(presentation.find('h2').at(0).text()).toBe('Who I am');
  });
  it('have a h2 that rendere "hat"', () => {
    presentation = shallow(<Presentation />);
    expect(presentation.find('h2').at(1).text()).toBe('What');
  });
});
