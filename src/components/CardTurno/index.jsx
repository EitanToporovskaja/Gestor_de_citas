import React from 'react';
import PropTypes from 'prop-types';
import { style } from './style';
import BotonEliminar from '../BotonEliminar';

const CardTurno = ({ petName, ownerName, date, time, symptoms, onDelete }) => {
  return (
    <div style={style.card}>
      <h2 style={style.petName}>{petName}</h2>
      <p style={style.ownerInfo}>Dueño: {ownerName}</p>
      <p style={style.dateTime}>Fecha: {date}</p>
      <p style={style.dateTime}>Hora: {time}</p>
      <p style={style.symptoms}>Síntomas: {symptoms}</p>
      <BotonEliminar onClick={onDelete} />
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