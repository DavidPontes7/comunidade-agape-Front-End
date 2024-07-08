import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useNavigate } from 'react-router-dom';

interface Noticia {
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

const DetalheConteudo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [conteudo, setConteudo] = useState<Noticia | null>(null);

  const navigate = useNavigate();


  useEffect(() => {
    const fetchConteudo = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/conteudo/${id}`);
        setConteudo(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchConteudo();
  }, [id]);

  if (!conteudo) {
    return <div>Carregando...</div>;
  }

// @ts-ignore
  const formattedDate = format(new Date(conteudo.publicadoEm), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <div className="container mx-auto py-8 px-4 md:px-8 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-gray-500 hover:underline">
          &larr; Voltar
        </button>
        <p className="text-sm text-gray-600">{formattedDate} - Autor: {conteudo.autor}</p>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-left">{`${conteudo.titulo.charAt(0).toUpperCase()}${conteudo.titulo.slice(1)}`}</h1>
      <div className="flex justify-center">
        <img
          src={`http://localhost:3333/files/${conteudo.banner}`}
          alt={conteudo.titulo}
          className="w-full h-auto object-cover mb-8 rounded-sm shadow-md"
          style={{ maxHeight: '500px', maxWidth: '1200px', backgroundSize: 'cover' }}
        />
      </div>
      <div className="mx-auto text-justify  text-gray-800 leading-relaxed mb-8 ">
        {conteudo.corpo.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <p className="text-sm text-gray-600">{formattedDate} - Autor: {conteudo.autor}</p>
      </div>
    </div>
  );
};

export default DetalheConteudo;
