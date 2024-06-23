import React from 'react';
import style from './style'

// Define el componente DeleteButton
const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={style.button}>
      ELIMINAR ×
    </button>
  );
};

export default DeleteButton;