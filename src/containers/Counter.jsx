// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {
  onDecrement: Function,
  onIncrement: Function,
  name?: string,
  value: number
};

class Counter extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementAsync: Function;
  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  incrementIfOdd: Function;
  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  render() {
    const { onDecrement, onIncrement, value } = this.props;
    return (
      <div>
        <b>{this.props.name}</b>
        <p>Clicked: {value} times</p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        <button onClick={this.incrementAsync}>Increment async</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state
});
const mapDispatchToProps = dispatch => ({
  onDecrement() {
    dispatch({ type: 'DECREMENT' });
  },

  onIncrement() {
    dispatch({ type: 'INCREMENT' });
  }
});

export const Unwrapped = Counter;
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
