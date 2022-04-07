import React, { Component } from 'react';

class BooleanComponent extends Component {
  render() {
    const message = this.props.bored ? '놀러가자' : '하던일 열심히 마무리하자';
    return <div className="message-container">{message}</div>;
  }
}

export default BooleanComponent;
