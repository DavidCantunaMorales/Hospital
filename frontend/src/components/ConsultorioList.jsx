import { useEffect, useState } from 'react';

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
        method: 'DELETE',
      });
      setConsultorios(
        consultorios.filter((consultorio) => consultorio.id !== id)
      );
    } catch (error) {
      console.error('Error al eliminar consultorio:', error);
    }
  };

  useEffect(() => {
    cargarConsultorios();
  }, []);

  return (
    <div>
      <h2>Consultorios</h2>
      <table style={{ border: '1px solid grey', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid grey' }}>Número</th>
            <th style={{ border: '1px solid grey' }}>Piso</th>
            <th style={{ border: '1px solid grey' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {consultorios.map((consultorio) => (
            <tr key={consultorio.id}>
              <td style={{ border: '1px solid grey' }}>{consultorio.numero}</td>
              <td style={{ border: '1px solid grey' }}>{consultorio.piso}</td>
              <td style={{ border: '1px solid grey' }}>
                <button onClick={() => handleDelete(consultorio.id)}>
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

export default ConsultorioList;
