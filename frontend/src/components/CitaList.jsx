import { useEffect, useState } from 'react';

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
        method: 'DELETE',
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
      <table style={{ border: '1px solid grey', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid grey' }}>Paciente ID</th>
            <th style={{ border: '1px solid grey' }}>Médico ID</th>
            <th style={{ border: '1px solid grey' }}>Fecha</th>
            <th style={{ border: '1px solid grey' }}>Hora</th>
            <th style={{ border: '1px solid grey' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id}>
              <td style={{ border: '1px solid grey' }}>{cita.paciente_id}</td>
              <td style={{ border: '1px solid grey' }}>{cita.medico_id}</td>
              <td style={{ border: '1px solid grey' }}>{cita.fecha}</td>
              <td style={{ border: '1px solid grey' }}>{cita.hora}</td>
              <td style={{ border: '1px solid grey' }}>
                <button onClick={() => handleDelete(cita.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitaList;
