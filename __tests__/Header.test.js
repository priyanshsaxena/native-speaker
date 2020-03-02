import Header from '../components/Header';
import React from 'react';
import { shallow } from 'enzyme';

test('Header renders one div with two links inside', () => {
  const wrapper = shallow(
    <Header />
  );
  const childrenLinks = wrapper.find('Link').children();
  expect(childrenLinks.length).toEqual(2);
});
