import React from 'react';
import PropTypes from 'prop-types';
import { style } from './style';

const Input = ({ type, value, onChange }) => {

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      style={style.default}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'date', 'time']).isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
