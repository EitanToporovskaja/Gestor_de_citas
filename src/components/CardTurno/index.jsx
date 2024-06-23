import React from 'react';
import PropTypes from 'prop-types';
import {style} from './style';
import BotonEliminar from '../BotonEliminar';

const CardTurno= ({ petName, ownerName, date, time, symptoms, onDelete }) => {
  return (
    <div style={style.card}>
      <h2>Mascota: {petName}</h2>
      <p>Dueño: {ownerName}</p>
      <p>Fecha: {date}</p>
      <p>Hora: {time}</p>
      <p>Síntomas: {symptoms}</p>
      <BotonEliminar onClick={onDelete}/>
    </div>
  );
};

CardTurno.propTypes = {
  petName: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  symptoms: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CardTurno;