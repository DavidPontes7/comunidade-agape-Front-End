import React from 'react';
import { Link } from 'react-router-dom';

interface Conteudo {
  id: string;
  titulo: string;
  corpo: string;
  autor: string;
  banner: string;
  publicadoEm: string;
  categoria: {
    name: string;
  };
}

const Card: React.FC<{ conteudo: Conteudo }> = ({ conteudo }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const getCategoryColor = (name: string) => {
    switch (name) {
      case 'santos':
        return 'text-purple-500'; // Roxo para categoria 'santos'

      case 'noticia':
        return 'text-red-500'; // Vermelho para categoria 'noticia'

      case 'formacao':
        return 'text-green-500'; // Verde para categoria 'formacao'

      case 'oracao':
      case 'agape':
        return 'text-yellow-500'; // Amarelo para categorias 'oracao' e 'agape'

      case 'martires':
      case 'agape':
        return 'text-sky-400';

      case 'acampamento':
      case 'eventos':
        return 'text-orange-600';


      default: // Amarelo para categorias 'oracao' e 'agape'
        return 'text-gray-500'; // Cinza para categorias não especificadas
    }
  };

  const truncatedContent = conteudo.corpo.length > 200
    ? `${conteudo.corpo.substring(0, 150)}...`
    : conteudo.corpo || 'Descrição não disponível';

  const categoryColor = getCategoryColor(conteudo.categoria.name);

  return (
    <div className="bg-transparent max-w-4xl mx-auto overflow-hidden border-gray-300 pb-6">
      {/* Exibição em desktop */}
      <div className="hidden md:flex">
        <div className="flex-shrink-0">
          <img
            src={`${baseUrl}/files/${conteudo.banner}`}
            alt={conteudo.titulo}
            className="w-full object-cover h-full"
            style={{ minHeight: '180px', maxHeight: '150px',maxWidth:'300px ',minWidth:'300px',backgroundSize:'cover',backgroundPosition:'center' }}
          />
        </div>

        <div className="md:w-2/3 bg-white p-4 lg:ml-3">
          <div className="flex items-center mb-2">
            <span className={`bg-white ${categoryColor} text-xs uppercase font-bold`}>
              #{conteudo.categoria.name}
            </span>
            <span className="text-gray-600 text-xs ml-2">
              {new Date(conteudo.publicadoEm).toLocaleString()}
            </span>
          </div>

          <Link to={`/conteudo/${conteudo.id}`}>
            <h3 className="text-xl font-bold text-gray-900 font-display mt-2 mb-4 hover:text-red-700 font-lora"
            >
              {`${conteudo.titulo.charAt(0).toUpperCase()}${conteudo.titulo.slice(1)}`}
            </h3>
          </Link>

          <h4 className="text-gray-800 font-semibold text-sm pb-2">
            {conteudo.autor}
          </h4>

          <div
            className="line-clamp-2 overflow-hidden text-ellipsis"
            dangerouslySetInnerHTML={{ __html: truncatedContent }}
          />
        </div>
      </div>

      {/* Linha separadora */}
      <div className="border-b border-gray-300 mt-4"></div>


      {/* dispositivos moveis */}
      <div className="sm:hidden">
        <a href="#">
          <img
            className="w-full h-auto object-cover "
            src={`http://localhost:3333/files/${conteudo.banner}`}
            alt={conteudo.titulo}
            style={{ minHeight: '250px', maxHeight: '200px' }}
          />
        </a>
        <div className="relative rounded-md grid grid-cols-1 -mt-14 px-10 pt-5 bg-white m-3 my-1">
          <span className={`bg-white ${categoryColor} text-xs uppercase font-bold`}>
            #{conteudo.categoria.name}
          </span>
          <Link to={`/conteudo/${conteudo.id}`} className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2" style={{ fontFamily: 'aktiv-grotesk, sans-serif' }}>
            {conteudo.titulo}
          </Link>
          <div
            className="line-clamp-3 overflow-hidden text-ellipsis"
            dangerouslySetInnerHTML={{ __html: truncatedContent }}
          />
        </div>
      </div>
    </div>


  );
};

export default Card;
