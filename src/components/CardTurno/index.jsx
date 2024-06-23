import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import BotonEliminar from '../BotonEliminar'

// Define el componente PetCard
const PetCard = ({ petName, ownerName, date, time, symptoms }) => {
  return (
    <div style={style.card}>
      <h2>Mascota: {petName}</h2>
      <p>Dueño: {ownerName}</p>
      <p>Fecha: {date}</p>
      <p>Hora: {time}</p>
      <p>Síntomas: {symptoms}</p>
      <BotonEliminar/>
    </div>
  );
};

// Define los propTypes para el componente PetCard
PetCard.propTypes = {
    petName: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    symptoms: PropTypes.string.isRequired,
  };
  
  export default PetCard;