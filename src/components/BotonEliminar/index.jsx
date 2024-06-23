import React from 'react';
import PropTypes from 'prop-types';
import { style } from './style';

const BotonEliminar = ({ onClick }) => {
  return (
    <button style={style.button} onClick={onClick}>Eliminar</button>
  );
};

BotonEliminar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BotonEliminar;