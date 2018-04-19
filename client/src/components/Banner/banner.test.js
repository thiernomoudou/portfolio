import React from 'react';
import { shallow} from 'enzyme';

import Banner from './index';
import banner from './../../images/banner-v2.svg';

describe('Banner', () => {
    let wrapper;
    it('has class banner', () => {
        wrapper = shallow(<Banner />);
        expect(wrapper.find('.banner').length).toEqual(1);
    });
    it('renders 3 images', () => {
        wrapper = shallow(<Banner />);
        expect(wrapper.find('img').length).toEqual(3);

    });
    it('renders a banner image', () => {
        wrapper = shallow(<Banner />);
        expect(wrapper.find('img').at(1).prop('src')).toEqual(banner);
    });
    
});