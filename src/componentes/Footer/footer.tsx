import { faInstagram, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='text-base sm:text-md md:text-lg text-white bg-neutral-900'>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '15px 0' }}>
        <a href="link-da-rede-social" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} style={{ width: '30px', height: '30px', marginRight: '10px', marginLeft: '10px' }} />
        </a>
        <i></i>
        <a href="link-da-rede-social" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ width: '30px', height: '30px', marginRight: '10px', marginLeft: '10px' }} />
        </a>
        <i></i>
        <a href="link-da-rede-social" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareFacebook} style={{ width: '30px', height: '30px', marginRight: '10px', marginLeft: '10px' }} />
        </a>

        {/* adicionar mais links caso for necessario,OBSERVAÇÃO */}
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="link-do-site" style={{ color: 'white', textDecoration: 'none' }}>Sobre nós</a>
        <span style={{ margin: '0 10px', color: 'white' }}>|</span>
        <a href="link-do-site" style={{ color: 'white', textDecoration: 'none' }}>Contato</a>
        <span style={{ margin: '0 10px', color: 'white' }}>|</span>
        <a href="link-do-site" style={{ color: 'white', textDecoration: 'none' }}>Eventos</a>
        <span style={{ margin: '0 10px', color: 'white' }}>|</span>
        <a href="link-do-site" style={{ color: 'white', textDecoration: 'none' }}>Doe Aqui</a>
      </div>
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        © {2024} Comunidade Católica Ágape. Todos os direitos reservados.


      </div>
    </footer>
  );
};

export default Footer;
