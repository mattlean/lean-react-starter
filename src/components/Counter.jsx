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

    // this.increment = this.increment.bind(this);
    // this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    // this.decrement = this.decrement.bind(this);
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
      <p>
        <b>{this.props.name}</b>
        <br /> Clicked: {value} times<br />
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
      </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
