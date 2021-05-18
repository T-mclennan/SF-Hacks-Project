import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'; 
import Sidebar from './Sidebar';
import {findByTestAttr, checkProps} from '../../test/testUtils';

Enzyme.configure({adapter: new EnzymeAdapter()})

/**
 * Factory function to create a ShallowWrapper for the Sidebar component. 
 * @function setup
 * @param {object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={isOpen: true}) => {
  return shallow(<Sidebar {...props}/>)
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-sidebar');
  expect(component.length).toBe(1);
})

test('shows sidebar when isOpen is true', () => {
  const wrapper = setup({isOpen: true});
  const component = findByTestAttr(wrapper, 'component-sidebar');
  // const message = findByTestAttr(wrapper, 'component-message')
  // expect(component.text()).toBe('');
})

test('hides sidebar when isOpen is false', () => {
  const wrapper = setup({isOpen: false});
  // const component = findByTestAttr(wrapper, 'component-sidebar');
  // expect(component.text()).toBe('');
})

test('does not throw an error with expected props', () => {
  const expectedProps = {isOpen: true, toggle: () => {}}
  checkProps(Sidebar, expectedProps);
})