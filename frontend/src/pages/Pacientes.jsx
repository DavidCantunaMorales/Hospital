import React, { useState } from 'react';
import PacienteList from '../components/PacienteList';
import PacienteForm from '../components/PacienteForm';

const Pacientes = () => {
  const [update, setUpdate] = useState(false);

  const handleSave = () => {
    setUpdate(!update);
  };

  return (
    <div>
      <h1>Gestión de Pacientes</h1>
      <PacienteForm onSave={handleSave} />
      <PacienteList key={update} />
    </div>
  );
};

export default Pacientes;
