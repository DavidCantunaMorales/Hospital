import React, { useEffect, useState } from 'react';

const PacienteList = () => {
  const [pacientes, setPacientes] = useState([]);

  const cargarPacientes = async () => {
    try {
      const response = await fetch('http://localhost:4000/paciente');
      const data = await response.json();
      setPacientes(data);
    } catch (error) {
      console.error('Error al cargar pacientes:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/paciente/${id}`, {
        method: 'DELETE'
      });
      setPacientes(pacientes.filter((paciente) => paciente.id !== id));
    } catch (error) {
      console.error('Error al eliminar paciente:', error);
    }
  };

  useEffect(() => {
    cargarPacientes();
  }, []);

  return (
    <div>
      <h2>Lista de Pacientes</h2>
      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente.id}>
            {paciente.nombre} - {paciente.apellido} - {paciente.fecha_nacimiento} - {paciente.email}
            <button onClick={() => handleDelete(paciente.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PacienteList;
