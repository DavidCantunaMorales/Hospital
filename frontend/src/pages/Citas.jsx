import { useState } from 'react';
import CitaList from '../components/CitaList';
import CitaForm from '../components/CitaForm';

const Citas = () => {
  const [update, setUpdate] = useState(false);

  const handleSave = () => {
    setUpdate(!update);
  };

  return (
    <div>
      <h1>Citas</h1>
      <CitaForm onSave={handleSave} />
      <CitaList key={update} />
    </div>
  );
};

export default Citas;
