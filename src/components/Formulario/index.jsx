import React, { useState } from 'react';
import Input from '../Input'
import CardTurno from '../CardTurno'
const Formulario = () => {
  const [nombreDueno, setNombreDueno] = useState('');
  const [nombreMascota, setNombreMascota] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintoma, setSintoma] = useState('');
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del dueño:
          <Input
            type="text"
            value={nombreDueno}
            onChange={(e) => setNombreDueno(e.target.value)}
          />
        </label>
        <br />
        <label>
          Nombre de la mascota:
          <Input
            type="text"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          />
        </label>
        <br />
        <label>
          Fecha:
          <Input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>
        <br />
        <label>
          Hora:
          <Input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </label>
        <br />
        <label>
          Síntomas:
          <Input
            type="text"
            value={sintoma}
            onChange={(e) => setSintoma(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <div>
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