import React, { useEffect, useState } from 'react';

const MedicoList = () => {
  const [medicos, setMedicos] = useState([]);

  const cargarMedicos = async () => {
    try {
      const response = await fetch('http://localhost:4000/medico');
      const data = await response.json();
      setMedicos(data);
    } catch (error) {
      console.error('Error al cargar médicos:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/medico/${id}`, {
        method: 'DELETE'
      });
      setMedicos(medicos.filter((medico) => medico.id !== id));
    } catch (error) {
      console.error('Error al eliminar médico:', error);
    }
  };

  useEffect(() => {
    cargarMedicos();
  }, []);

  return (
    <div>
      <h2>Lista de Médicos</h2>
      <ul>
        {medicos.map((medico) => (
          <li key={medico.id}>
            {medico.nombre} - {medico.apellido} - {medico.especialidad}
            <button onClick={() => handleDelete(medico.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicoList;
