import React from 'react';
import { Link } from 'react-router-dom';

interface Evento {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
  banner: string;
}

const CardEvento: React.FC<{ evento: Evento }> = ({ evento }) => {
  const getCategoryColor = (categoria: string) => {
    switch (categoria.toLowerCase()) {
      case 'acampamentos':
      case 'eventos':
        return 'text-orange-600'; // Laranja para categoria 'acampamentos' e 'eventos'

      // Adicione mais casos conforme necessário para outras categorias específicas

      default:
        return 'text-gray-500'; // Cinza para outras categorias não especificadas
    }
  };

  const categoryColor = getCategoryColor(evento.titulo);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
      <Link to={`/eventos/${evento.id}`}>
        <img
          src={`http://localhost:3333/files/${evento.banner}`}
          alt={evento.titulo}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
      
        <h3 className="mt-2 mb-4 text-xl font-bold leading-tight">
          <Link to={`/eventos/${evento.id}`} className="hover:text-red-700">
            {evento.titulo}
          </Link>
        </h3>
        <p className="text-gray-700">{evento.descricao}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600 text-sm">
            Data: {new Date(evento.data).toLocaleDateString()}
          </span>
          <Link
            to={`/eventos/${evento.id}`}
            className="text-indigo-600 hover:underline"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardEvento;
