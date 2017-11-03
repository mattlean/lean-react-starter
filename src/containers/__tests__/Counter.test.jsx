import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';

import { Unwrapped as UnwrappedCounter } from '../Counter';

Enzyme.configure({ adapter: new Adapter() });

function setup(value = 0) {
  const actions = {
    onDecrement: jest.fn(),
    onIncrement: jest.fn()
  };

  const component = Enzyme.shallow(<UnwrappedCounter value={value} {...actions} />);

  return {
    actions,
    buttons: component.find('button'),
    component,
    p: component.find('p')
  };
}

describe('Counter component', () => {
  it('renders correctly', () => {
    const { component } = setup();

    expect(component).toMatchSnapshot();
  });

  it('should display count', () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^Clicked: 0 times/);
  });

  it('first button should call onIncrement', () => {
    const { actions, buttons } = setup();
    buttons.at(0).simulate('click');
    expect(actions.onIncrement).toBeCalled();
  });

  it('second button should call onDecrement', () => {
    const { actions, buttons } = setup();
    buttons.at(1).simulate('click');
    expect(actions.onDecrement).toBeCalled();
  });

  it('third button should not call onIncrement if the counter is even', () => {
    const { actions, buttons } = setup(42);
    buttons.at(2).simulate('click');
    expect(actions.onIncrement).not.toBeCalled();
  });

  it('third button should call onIncrement if the counter is odd', () => {
    const { actions, buttons } = setup(43);
    buttons.at(2).simulate('click');
    expect(actions.onIncrement).toBeCalled();
  });

  it('third button should call onIncrement if the counter is odd', () => {
    const { actions, buttons } = setup(-43);
    buttons.at(2).simulate('click');
    expect(actions.onIncrement).toBeCalled();
  });

  it('fourth button should call onCremenet in a second', done => {
    const { actions, buttons } = setup();
    buttons.at(3).simulate('click');
    setTimeout(() => {
      expect(actions.onIncrement).toBeCalled();
      done();
    }, 1000);
  });
});
