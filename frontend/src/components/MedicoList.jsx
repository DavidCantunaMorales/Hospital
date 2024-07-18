import { useEffect, useState } from 'react';

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
        method: 'DELETE',
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
      <table style={{ border: '1px solid grey', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid grey' }}>Nombre</th>
            <th style={{ border: '1px solid grey' }}>Apellido</th>
            <th style={{ border: '1px solid grey' }}>Especialidad</th>
            <th style={{ border: '1px solid grey' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((medico) => (
            <tr key={medico.id}>
              <td style={{ border: '1px solid grey' }}>{medico.nombre}</td>
              <td style={{ border: '1px solid grey' }}>{medico.apellido}</td>
              <td style={{ border: '1px solid grey' }}>
                {medico.especialidad}
              </td>
              <td style={{ border: '1px solid grey' }}>
                <button onClick={() => handleDelete(medico.id)}>
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

export default MedicoList;
