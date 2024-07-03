import React, { useState } from 'react';
import Input from '../Input';
import CardTurno from '../CardTurno';
import { style } from './style';

const Formulario = () => {
  const [nombreDueno, setNombreDueno] = useState('');
  const [nombreMascota, setNombreMascota] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintoma, setSintoma] = useState('');
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombreDueno || !nombreMascota || !fecha || !hora || !sintoma) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Obtener la fecha y hora actual
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD
    const currentTime = now.toTimeString().split(' ')[0]; // Hora actual en formato HH:MM:SS

    // Validar que la fecha y hora no sean anteriores al presente
    if (fecha < currentDate || (fecha === currentDate && hora < currentTime)) {
      alert('La fecha u hora de la cita no pueden ser anteriores al momento actual.');
      return;
    }
    const newCard = {
      petName: nombreMascota,
      ownerName: nombreDueno,
      date: fecha,
      time: hora,
      symptoms: sintoma,
    };
    setCards([...cards, newCard]);
    // Limpiar campos
    setNombreDueno('');
    setNombreMascota('');
    setFecha('');
    setHora('');
    setSintoma('');
  };

  const handleDeleteCard = (index) => {
    const confirmDelete = window.confirm('¿Está seguro que desea eliminar esta cita?');
    if (confirmDelete) {
      setCards(cards.filter((_, i) => i !== index));
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-even', width:'100%' }}>
      <form onSubmit={handleSubmit} style={style.formContainer}>
        <label style={style.label}>
          Nombre del dueño:
          <Input
            style={style.input}
            type="text"
            value={nombreDueno}
            onChange={(e) => setNombreDueno(e.target.value)}
          />
        </label>
        <br />
        <label style={style.label}>
          Nombre de la mascota:
          <Input
            style={style.input}
            type="text"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          />
        </label>
        <br />
        <label style={style.label}>
          Fecha:
          <Input
            style={style.input}
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>
        <br />
        <label style={style.label}>
          Hora:
          <Input
            style={style.input}
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </label>
        <br />
        <label style={style.label}>
          Síntomas:
          <Input
            style={style.input}
            type="text"
            value={sintoma}
            onChange={(e) => setSintoma(e.target.value)}
          />
        </label>
        <br />
        <button style={style.button} type="submit">
          Enviar
        </button>
      </form>
      {/* Contenedor de tarjetas con estilo de fila */}
      <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', width:'100%' }}>
        {cards.map((card, index) => (
          <CardTurno
            key={index}
            petName={card.petName}
            ownerName={card.ownerName}
            date={card.date}
            time={card.time}
            symptoms={card.symptoms}
            onDelete={() => handleDeleteCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Formulario;