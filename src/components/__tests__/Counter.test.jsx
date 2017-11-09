import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';

import Counter from '../Counter';

Enzyme.configure({ adapter: new Adapter() });

const onDecrement = jest.spyOn(Counter.prototype, 'onDecrement');
const onIncrement = jest.spyOn(Counter.prototype, 'onIncrement');

function setup(value = 0) {
  const component = Enzyme.shallow(<Counter value={value} />);

  return {
    buttons: component.find('button'),
    component,
    p: component.find('p')
  };
}

afterEach(() => {
  onDecrement.mockReset();
  onIncrement.mockReset();
});

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
    const { buttons } = setup();
    buttons.at(0).simulate('click');
    expect(onIncrement).toBeCalled();
  });

  it('second button should call onDecrement', () => {
    const { buttons } = setup();
    buttons.at(1).simulate('click');
    expect(onDecrement).toBeCalled();
  });

  it('third button should not call onIncrement if the counter is even', () => {
    const { buttons } = setup(42);
    buttons.at(2).simulate('click');
    expect(onIncrement).not.toBeCalled();
  });

  it('third button should call onIncrement if the counter is odd', () => {
    const { buttons } = setup(43);
    buttons.at(2).simulate('click');
    expect(onIncrement).toBeCalled();
  });

  it('third button should call onIncrement if the counter is odd and negative', () => {
    const { buttons } = setup(-43);
    buttons.at(2).simulate('click');
    expect(onIncrement).toBeCalled();
  });

  it('fourth button should call onIncrement in a second', done => {
    const { buttons } = setup();
    buttons.at(3).simulate('click');
    setTimeout(() => {
      expect(onIncrement).toBeCalled();
      done();
    }, 1000);
  });
});
