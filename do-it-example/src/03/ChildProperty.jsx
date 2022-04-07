import React, { Component } from 'react';
import PropTypes from 'prop-tyes';

class ChildProperty extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

ChildProperty.propTypes = {
  children: PropTypes.node,
};

export default ChildProperty;
