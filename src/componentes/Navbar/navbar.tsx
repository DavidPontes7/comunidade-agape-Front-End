import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MinhaImagem from '../../img/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div>
      <div className="Titulo">Comunidade Catolica Ágape</div>
      <img src={MinhaImagem} alt="Logo" className="LogoImage" />

      <button className="MenuButton" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className="Nav" style={{ display: isMobileOpen ? 'block' : 'none' }}>
        <ul className="Ul">
          <li className="Li">
            <a href="#" className="A" >
              COMUNIDADE
              <ul className="Dropdown">
                <li className="MenuItem"><a href="#" className="A">Onde Estamos</a></li>
                <li className="MenuItem"><a href="#" className="A">Nossa Historia</a></li>
                <li className="MenuItem"><a href="#" className="A">Fundador</a></li>
              </ul>
            </a>
          </li>
          <li className="Li"><a href="#" className="A">NOTICIAS</a></li>
          <li className="Li"><a href="#" className="A">FORMAÇÃO</a></li>
          <li className="Li"><a href="#" className="A">EVENTOS</a></li>
          <Link to="/liturgia-diaria" className="Link">LITURGIA</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
