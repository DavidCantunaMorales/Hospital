import { useState } from 'react';

const PacienteForm = ({ onSave }) => {
  const [paciente, setPaciente] = useState({
    nombre_p: '',
    apellido_p: '',
    fecha_nacimiento_p: '',
    email_p: '',
  });

  const handleChange = (e) => {
    setPaciente({ ...paciente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/paciente', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paciente),
      });
      await response.json();
      onSave();
    } catch (error) {
      console.error('Error al crear paciente:', error);
    }
  };

  const formRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  };

  const inputContainerStyle = {
    flex: 1,
    marginRight: '10px',
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={formRowStyle}>
        <div style={inputContainerStyle}>
          <label>Nombre:</label>
          <input
            type='text'
            name='nombre_p'
            value={paciente.nombre_p}
            onChange={handleChange}
          />
        </div>
        <div style={inputContainerStyle}>
          <label>Apellido:</label>
          <input
            type='text'
            name='apellido_p'
            value={paciente.apellido_p}
            onChange={handleChange}
          />
        </div>
      </div>
      <div style={formRowStyle}>
        <div style={inputContainerStyle}>
          <label>Fecha de Nacimiento:</label>
          <input
            type='date'
            name='fecha_nacimiento_p'
            value={paciente.fecha_nacimiento_p}
            onChange={handleChange}
          />
        </div>
        <div style={inputContainerStyle}>
          <label>Email:</label>
          <input
            type='email'
            name='email_p'
            value={paciente.email_p}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type='submit'>Guardar</button>
    </form>
  );
};

export default PacienteForm;
