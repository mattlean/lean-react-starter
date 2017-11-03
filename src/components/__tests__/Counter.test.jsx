import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';

import Counter from '../Counter';

Enzyme.configure({ adapter: new Adapter() });

function setup(value = 0) {
  const component = Enzyme.shallow(<Counter value={value} />);

  return {
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
    const onIncrement = jest.spyOn(Counter.prototype, 'onIncrement');
    const { buttons } = setup();
    buttons.at(0).simulate('click');
    expect(onIncrement).toBeCalled();
    onIncrement.mockReset();
  });

  it('second button should call onDecrement', () => {
    const onDecrement = jest.spyOn(Counter.prototype, 'onDecrement');
    const { buttons } = setup();
    buttons.at(1).simulate('click');
    expect(onDecrement).toBeCalled();
    onDecrement.mockReset();
  });

  it('third button should not call onIncrement if the counter is even', () => {
    const onIncrement = jest.spyOn(Counter.prototype, 'onIncrement');
    const { buttons } = setup(42);
    buttons.at(2).simulate('click');
    expect(onIncrement).not.toBeCalled();
    onIncrement.mockReset();
  });

  it('third button should call onIncrement if the counter is odd', () => {
    const onIncrement = jest.spyOn(Counter.prototype, 'onIncrement');
    const { buttons } = setup(43);
    buttons.at(2).simulate('click');
    expect(onIncrement).toBeCalled();
    onIncrement.mockReset();
  });

  it('third button should call onIncrement if the counter is odd and negative', () => {
    const onIncrement = jest.spyOn(Counter.prototype, 'onIncrement');
    const { buttons } = setup(-43);
    buttons.at(2).simulate('click');
    expect(onIncrement).toBeCalled();
    onIncrement.mockReset();
  });

  it('fourth button should call onIncrement in a second', done => {
    const onIncrement = jest.spyOn(Counter.prototype, 'onIncrement');
    const { buttons } = setup();
    buttons.at(3).simulate('click');
    setTimeout(() => {
      expect(onIncrement).toBeCalled();
      onIncrement.mockReset();
      done();
    }, 1000);
  });
});
