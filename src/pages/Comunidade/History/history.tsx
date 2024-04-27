import { Link } from 'react-router-dom';
import './style.css';
import terezinhaImg from '../../../img/terezinha.jpg';
import franciscoImg from '../../../img/francisco.jpg';

export default function History() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      {/* Sobre Nós */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-800 uppercase tracking-wide mb-4">
          Sobre Nós
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Breve introdução sobre a comunidade aqui...
        </p>
        <Link to="/link1" className="text-blue-600 hover:text-blue-800 font-semibold">
          Saiba mais sobre nossa história
        </Link>
      </div>
      <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-800 uppercase tracking-wide mb-4">
          Baluartes
        </h1>
      {/* Divisória */}
      <hr className="border-t-2 border-gray-200 mb-8" />
      
      {/* Nossos Baluartes */}
      <div className="flex flex-col md:flex-row">
        {/* Terezinha do Menino Jesus */}
        <div className="flex-1 flex flex-col items-center mb-8 md:mr-4">
          <img src={terezinhaImg} alt="Terezinha do Menino Jesus" className="rounded-full w-36 h-36 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Terezinha do Menino Jesus</h3>
          <p className="text-gray-700">Informações sobre Terezinha.</p>
        </div>
        {/* Divisória */}
        <div className="hidden md:block border-l-2 border-gray-200 h-auto mb-8"></div>
        {/* São Francisco de Assis */}
        <div className="flex-1 flex flex-col items-center mb-8 md:ml-4">
          <img src={franciscoImg} alt="São Francisco de Assis" className="rounded-full w-36 h-36 mb-2" />
          <h3 className="text-xl font-semibold mb-2">São Francisco de Assis</h3>
          <p className="text-gray-700">Informações sobre São Francisco.</p>
        </div>
      </div>
    </div>
  );
}
