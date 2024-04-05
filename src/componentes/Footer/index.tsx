import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types'; // Alterado o import
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div>
      <div>
        <h1>"Uma Vocação de Amor"</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <span>|</span>
            <li><a href="#">Contato</a></li>
            <span>|</span>
            <li><a href="#">Doação</a></li>
            <span>|</span>
            <li><a href="#">História</a></li>
          </ul>
        </nav>
        <div>
          <a href="https://www.facebook.com/comcatolicaagape/">
            <FontAwesomeIcon icon={faSquareFacebook as IconDefinition} size="2x" style={{ marginRight: '10px' }} />
          </a>
          <a href="https://www.instagram.com/comunidadecatolicaagape/">
            <FaInstagram size={35} style={{ marginRight: '10px' }} />
          </a>
          <a href="https://www.youtube.com/channel/UCs9-K-QajDGH7r-YjUmQoaA">
            <FaYoutube size={40} />
          </a>
        </div>
        <hr />
        <div>
          &copy; 2024 Equipe de Desenvolvimento - Comunidade Católica Ágape. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
};

export default Footer;
