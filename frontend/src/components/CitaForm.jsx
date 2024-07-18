import { useState } from 'react';

const CitaForm = ({ onSave }) => {
  const [cita, setCita] = useState({
    paciente_id: '',
    medico_id: '',
    fecha: '',
    hora: '',
    consultorio_id: '',
  });

  const handleChange = (e) => {
    setCita({ ...cita, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/cita', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cita),
      });
      await response.json();
      onSave();
    } catch (error) {
      console.error('Error al crear cita:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Paciente ID:</label>
        <input
          type='text'
          name='paciente_id'
          value={cita.paciente_id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Medico ID:</label>
        <input
          type='text'
          name='medico_id'
          value={cita.medico_id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Fecha:</label>
        <input
          type='date'
          name='fecha'
          value={cita.fecha}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Hora:</label>
        <input
          type='time'
          name='hora'
          value={cita.hora}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Consultorio ID:</label>
        <input
          type='text'
          name='consultorio_id'
          value={cita.consultorio_id}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Guardar</button>
    </form>
  );
};

export default CitaForm;
