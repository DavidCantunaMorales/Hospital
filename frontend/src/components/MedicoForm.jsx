import { useState } from 'react';

const MedicoForm = ({ onSave }) => {
  const [medico, setMedico] = useState({
    nombre_m: '',
    apellido_m: '',
    especialidad_m: '',
  });

  const handleChange = (e) => {
    setMedico({ ...medico, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/medico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(medico),
      });
      await response.json();
      onSave();
    } catch (error) {
      console.error('Error al crear médico:', error);
    }
  };

  const formRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  };

  const inputContainerStyle = {
    display: 'flex',
    marginRight: '10px',
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={formRowStyle}>
        <div style={inputContainerStyle}>
          <label>Nombre:</label>
          <input
            type='text'
            name='nombre_m'
            value={medico.nombre_m}
            onChange={handleChange}
          />
        </div>
        <div style={inputContainerStyle}>
          <label>Apellido:</label>
          <input
            type='text'
            name='apellido_m'
            value={medico.apellido_m}
            onChange={handleChange}
          />
        </div>
      </div>
      <div style={formRowStyle}>
        <div style={{ ...inputContainerStyle, marginRight: '0' }}>
          <label>Especialidad:</label>
          <input
            type='text'
            name='especialidad_m'
            value={medico.especialidad_m}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type='submit'>Guardar</button>
    </form>
  );
};

export default MedicoForm;
