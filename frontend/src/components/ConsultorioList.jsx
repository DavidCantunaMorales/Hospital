import React, { useEffect, useState } from 'react';

const ConsultorioList = () => {
  const [consultorios, setConsultorios] = useState([]);

  const cargarConsultorios = async () => {
    try {
      const response = await fetch('http://localhost:4000/consultorio');
      const data = await response.json();
      setConsultorios(data);
    } catch (error) {
      console.error('Error al cargar consultorios:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/consultorio/${id}`, {
        method: 'DELETE'
      });
      setConsultorios(consultorios.filter((consultorio) => consultorio.id !== id));
    } catch (error) {
      console.error('Error al eliminar consultorio:', error);
    }
  };

  useEffect(() => {
    cargarConsultorios();
  }, []);

  return (
    <div>
      <h2>Lista de Consultorios</h2>
      <ul>
        {consultorios.map((consultorio) => (
          <li key={consultorio.id}>
            {consultorio.numero} - {consultorio.piso}
            <button onClick={() => handleDelete(consultorio.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultorioList;
