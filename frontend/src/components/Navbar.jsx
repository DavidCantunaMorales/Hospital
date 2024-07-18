import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/citas'>Citas</Link>
        </li>
        <li>
          <Link to='/consultorios'>Consultorios</Link>
        </li>
        <li>
          <Link to='/medicos'>Medicos</Link>
        </li>
        <li>
          <Link to='/pacientes'>Pacientes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
