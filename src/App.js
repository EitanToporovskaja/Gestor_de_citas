import React, { useState } from 'react';
import './styles.css';

const AppointmentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, date, time });
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <div className="form-container">
      <h2>Agregar Cita</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

const AppointmentList = ({ appointments, onDelete }) => {
  return (
    <div className="list-container">
      <h2>Lista de Citas</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <span>{appointment.name}</span>
            <span>{appointment.date}</span>
            <span>{appointment.time}</span>
            <button onClick={() => onDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


const App = () => {
  const [appointments, setAppointments] = useState([]);

  const handleAddAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const handleDeleteAppointment = (index) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar esta cita?")) {
      const updatedAppointments = [...appointments];
      updatedAppointments.splice(index, 1);
      setAppointments(updatedAppointments);
    }
  };

  return (
    <div className="app-container">
      <AppointmentForm onAdd={handleAddAppointment} />
      <AppointmentList appointments={appointments} onDelete={handleDeleteAppointment} />
    </div>
  );
};

export default App;
