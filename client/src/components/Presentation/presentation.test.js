import React from 'react';
import { shallow } from 'enzyme';

import Presentation from './index';

describe('Presentation', () => {
    let presentation;
    it('have 2 h3', () => {
        presentation = shallow(<Presentation />);
        expect(presentation.find('h3').length).toBe(2)
    });
    it('have a h3 that rendere "Who am I ?"', () => {
        presentation = shallow(<Presentation />);
        expect(presentation.find('h3').at(0).text()).toBe('Who am I ?');
    });
    it('have a h3 that rendere "Whith what"', () => {
        presentation = shallow(<Presentation />);
        expect(presentation.find('h3').at(1).text()).toBe('Whith what ?');
    });
});
