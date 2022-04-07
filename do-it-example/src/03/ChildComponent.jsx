import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;
    return (
      <div>
        <span>{boolValue}</span>
        <span>{numValue}</span>
        <span>{arrayValue}</span>
        <span>{nodeValue}</span>
        <span>{funcValue}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  //objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
