import React, { useEffect, useState } from 'react';

const CitaList = () => {
  const [citas, setCitas] = useState([]);

  const cargarCitas = async () => {
    try {
      const response = await fetch('http://localhost:4000/cita');
      const data = await response.json();
      setCitas(data);
    } catch (error) {
      console.error('Error al cargar citas:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/cita/${id}`, {
        method: 'DELETE'
      });
      setCitas(citas.filter((cita) => cita.id !== id));
    } catch (error) {
      console.error('Error al eliminar cita:', error);
    }
  };

  useEffect(() => {
    cargarCitas();
  }, []);

  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            {cita.paciente_id} - {cita.medico_id} - {cita.fecha} - {cita.hora}
            <button onClick={() => handleDelete(cita.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitaList;
