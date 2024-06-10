import React from 'react';
import PropTypes from 'prop-types';
import { style } from './style';

const Input = ({ type, value, onChange }) => {
  const inputStyle = style[type] || style.default;

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      style={inputStyle}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'date', 'time']),
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;