import React from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
  //class 형 컴포넌트의 this.props와 동일함
  const { somePropValue } = props;
  //class 형 컴포넌트의 this.context와 동일함
  const { someContextVaue } = context;
  return <h1>Hello, {somePropValue} </h1>;
}

SFC.PropTypes = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: 'default value' };

export default SFC;
