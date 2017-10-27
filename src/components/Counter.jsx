// @flow

import React, { Component } from 'react';

type Props = {
  name?: string
};

type State = {
  value: number
};

class Counter extends Component<Props, State> {
  increment: Function;
  decrement: Function;

  constructor(props: Props) {
    super(props);

    this.state = {
      value: 0
    };

    this.increment = this.increment.bind(this);
    // this.incrementAsync = this.incrementAsync.bind(this);
    // this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ value: this.state.value + 1 });
  }

  decrement() {
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return (
      <p>
        <b>{this.props.name}</b>
        <br /> Clicked: {this.state.value} times <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </p>
    );
  }
}

export default Counter;
