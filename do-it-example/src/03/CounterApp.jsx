import React, { Component } from 'react';
import Counter from './Counter2';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.increaseCount = this.increaseCount.bind(this);
  }
  render() {
    return <Counter count={this.state.count} onAdd={this.increaseCount} />;
  }
}

export default CounterApp;
