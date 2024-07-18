import React, { useState } from 'react';

const ConsultorioForm = ({ onSave }) => {
  const [consultorio, setConsultorio] = useState({
    numero_c: '',
    piso_p: ''
  });

  const handleChange = (e) => {
    setConsultorio({ ...consultorio, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/consultorio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(consultorio)
      });
      await response.json();
      onSave();
    } catch (error) {
      console.error('Error al crear consultorio:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Número:</label>
        <input
          type="text"
          name="numero_c"
          value={consultorio.numero_c}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Piso:</label>
        <input
          type="text"
          name="piso_p"
          value={consultorio.piso_p}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ConsultorioForm;
