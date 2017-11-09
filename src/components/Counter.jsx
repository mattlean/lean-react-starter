// @flow

import React, { Component } from 'react';

type Props = {
  name?: string,
  value: number
};

type State = {
  value: number
};

class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.value ? props.value : 0
    };

    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
  }

  onIncrement: Function;
  onIncrement() {
    this.setState({ value: this.state.value + 1 });
  }

  onDecrement: Function;
  onDecrement() {
    this.setState({ value: this.state.value - 1 });
  }

  incrementAsync: Function;
  incrementAsync() {
    setTimeout(this.onIncrement, 1000);
  }

  incrementIfOdd: Function;
  incrementIfOdd() {
    if (this.state.value % 2 !== 0) {
      this.onIncrement();
    }
  }

  render() {
    return (
      <div>
        <b>{this.props.name}</b>
        <p>Clicked: {this.state.value} times</p>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        <button onClick={this.incrementAsync}>Increment async</button>
      </div>
    );
  }
}

export default Counter;
