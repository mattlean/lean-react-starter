import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';

import BSStarterTemplate from '../BSStarterTemplate';

Enzyme.configure({ adapter: new Adapter() });

test('BSStarterTemplate renders correctly', () => {
  const component = Enzyme.shallow(<BSStarterTemplate />);
  expect(component).toMatchSnapshot();
});
