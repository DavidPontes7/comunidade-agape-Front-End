import React from 'react';
import { Link } from 'react-router-dom';

type PropsCard = {
  id?: string | number;
  imagem: string;
  titulo: string;
  autor: string;
  data: string;
  descricao?: string; // tornando a descrição opcional
  link: string;
};

const Card: React.FC<PropsCard> = ({ id, imagem, titulo, autor, data, descricao, link }) => {
  return (
    <article className="flex flex-col shadow max-w-[400px] rounded-md overflow-hidden">
      {/* Imagem do artigo */}

      <img src={imagem} alt={titulo} className="object-cover h-60 sm:h-72 md:h-80 w-full" />

      <div className="bg-white flex flex-col justify-start p-6">
        <h4 className="text-blue-700 text-sm font-bold uppercase pb-4">{autor}</h4>
        <h3 className="text-3xl font-bold hover:text-gray-700 pb-4">
          <Link to={link} className="hover:underline">{titulo}</Link>
        </h3>
        <p className="text-sm pb-3">
          Por <span className="font-semibold hover:text-gray-800">{autor}</span>, publicado em {data}
        </p>
        <p className="pb-6">{descricao || 'Descrição não disponível'}</p>
        <Link to={link} className="uppercase text-gray-800 hover:text-black">
          Continue Lendo
        </Link>
      </div>
    </article>
  );
};

export default Card;
