import React from 'react';
import { FaEnvelope, FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-8 sm:py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Fale Conosco</h3>
            <Link to="/Contato" className="text-sm flex items-center justify-center md:justify-start hover:text-gray-300 transition duration-300">
              <FaEnvelope className="mr-2" /> contato@agape.com
            </Link>
          </div>
          <div className="text-center md:w-2/3 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} Comunidade Católica Ágape. Todos os direitos reservados.</p>

          </div>
          <div className="md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Redes Sociais</h3>
            <div className="flex justify-center md:justify-end">
              <a href="https://www.facebook.com/agape" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 mr-4 transition duration-300">
                <span className="sr-only">Facebook</span>
                <FaFacebookSquare className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/agape" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 mr-4 transition duration-300">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://www.twitter.com/agape" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
                <span className="sr-only">Twitter</span>
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
