import React, { useState } from 'react';

const Formulario = () => {
  const [nombreDueno, setNombreDueno] = useState('');
  const [nombreMascota, setNombreMascota] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const[sintoma,setSintoma]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre del dueño:', nombreDueno);
    console.log('Nombre de la mascota:', nombreMascota);
    console.log('Fecha:', fecha);
    console.log('Hora:', hora);
    console.log('Sintoma:',sintoma);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del dueño:
        <input
          type="text"
          value={nombreDueno}
          onChange={(e) => setNombreDueno(e.target.value)}
        />
      </label>
      <br />
      <label>
        Nombre de la mascota:
        <input
          type="text"
          value={nombreMascota}
          onChange={(e) => setNombreMascota(e.target.value)}
        />
      </label>
      <br />
      <label>
        Fecha:
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </label>
      <br />
      <label>
        Hora:
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
      </label>
      <br />
      <label>
        Sintomas:
        <input
          type="text"
          value={sintoma}
          onChange={(e) => setSintoma(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
