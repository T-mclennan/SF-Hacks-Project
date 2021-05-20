import React from 'react';
import {shallow} from 'enzyme';
import Sidebar from './Sidebar';
import {findByTestAttr, checkProps} from '../../test/testUtils';
  
const defaultProps = {isOpen: true};

/**
 * Factory function to create a ShallowWrapper for the Sidebar component. 
 * @function setup
 * @param {object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {

  const setupProps = {...defaultProps, ...props};
  return shallow(<Sidebar {...setupProps}/>)
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-sidebar');
  expect(component.length).toBe(1);
})

test('shows sidebar when isOpen is true', () => {
  const wrapper = setup({isOpen: true});
  const visibleSidebar = wrapper.find('.show-sidebar')
  expect(visibleSidebar.length).toBe(1);
})

test('hides sidebar when isOpen is false', () => {
  const wrapper = setup({isOpen: false});
  const visibleSidebar = wrapper.find('.show-sidebar')
  expect(visibleSidebar.length).toBe(0);
})

test('does not throw an error with expected props', () => {
  const expectedProps = {isOpen: true, toggle: () => {}}
  checkProps(Sidebar, expectedProps);
})