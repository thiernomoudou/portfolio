import React from 'react';
import { shallow, mount } from 'enzyme';

import HomePage from './../index';

describe('Homepage', () => {
    it('passing test', () => {
        expect(true).toBeTruthy();
    });
    it('failing test', () => {
        expect(2*3).toEqual(6);
    });
});