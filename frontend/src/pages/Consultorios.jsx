import { useState } from 'react';
import ConsultorioList from '../components/ConsultorioList';
import ConsultorioForm from '../components/ConsultorioForm';

const Consultorios = () => {
  const [update, setUpdate] = useState(false);

  const handleSave = () => {
    setUpdate(!update);
  };

  return (
    <div>
      <h1>Gestión de Consultorios</h1>
      <ConsultorioForm onSave={handleSave} />
      <ConsultorioList key={update} />
    </div>
  );
};

export default Consultorios;
