import { useEffect, useState } from 'react';

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
        method: 'DELETE',
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
      <table style={{ border: '1px solid grey', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid grey' }}>Nombre</th>
            <th style={{ border: '1px solid grey' }}>Apellido</th>
            <th style={{ border: '1px solid grey' }}>Fecha de Nacimiento</th>
            <th style={{ border: '1px solid grey' }}>Email</th>
            <th style={{ border: '1px solid grey' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td style={{ border: '1px solid grey' }}>{paciente.nombre}</td>
              <td style={{ border: '1px solid grey' }}>{paciente.apellido}</td>
              <td style={{ border: '1px solid grey' }}>
                {paciente.fecha_nacimiento}
              </td>
              <td style={{ border: '1px solid grey' }}>{paciente.email}</td>
              <td style={{ border: '1px solid grey' }}>
                <button onClick={() => handleDelete(paciente.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PacienteList;
