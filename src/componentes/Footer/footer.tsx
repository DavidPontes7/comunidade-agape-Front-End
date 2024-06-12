import React from 'react';
import { FaEnvelope } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 ">
      {/* Links */}
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
