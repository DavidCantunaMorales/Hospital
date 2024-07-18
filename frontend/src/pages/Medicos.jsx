import React, { useState } from 'react';
import MedicoList from '../components/MedicoList';
import MedicoForm from '../components/MedicoForm';

const Medicos = () => {
  const [update, setUpdate] = useState(false);

  const handleSave = () => {
    setUpdate(!update);
  };

  return (
    <div>
      <h1>Gestión de Médicos</h1>
      <MedicoForm onSave={handleSave} />
      <MedicoList key={update} />
    </div>
  );
};

export default Medicos;
