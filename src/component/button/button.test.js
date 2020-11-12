import { render, screen } from '@testing-library/react';

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import App from '../../App';

import { shallow, mount } from 'enzyme';
import Button from '../../component/button/button';

describe('here is the test for button', () => {
    it('should display initial count', () => {
        expect(Button).toBeDefined();
      });
/*
      it('should have class', () => {

        const wrapper = mount(<Button />);
        const button = wrapper.find('.button-class');
        console.log(button.debug());
        expect(wrapper.hasClass('button-class'));
      });
*/
      it('it will display the text in props', () => {
        const wrapper = mount(<Button text= 'here is button' /> );
        const button = wrapper.find('.button-class');
        console.log(button.debug());
        expect(button.text()).toEqual('here is button');
      });
})