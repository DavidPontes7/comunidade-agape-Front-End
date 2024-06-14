import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-500 to-indigo-600 text-white py-6 sm:py-8 ">
      {/* Links */}
      <section className="text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Siga-nos nas Redes Sociais!</h2>
          <p className="text-lg mb-6">Fique conectado e acompanhe nossas últimas novidades e eventos.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="mt-14">
          <hr className="border-gray-300" />
        </div>
      </section>

      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between px-4 sm:px-6">
        <div className="text-center sm:text-left mb-3 sm:mb-0">
          {/* Adicione um ícone ao link de contato */}
          <Link to="/contato" className="text-sm flex items-center justify-center sm:justify-start hover:text-gray-300 transition duration-300">
            <FaEnvelope className="mr-2" /> Fale Conosco
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm">
          <span>&copy; {new Date().getFullYear()} Comunidade Católica Ágape. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
