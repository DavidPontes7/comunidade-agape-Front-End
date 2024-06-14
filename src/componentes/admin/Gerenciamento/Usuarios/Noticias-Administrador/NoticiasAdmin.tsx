import React, { useState, useEffect } from 'react';

const GerenciarNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Simulação de dados de notícias (pode ser substituído por uma chamada à API real)
    const fetchNoticias = async () => {
      try {
        // Aqui você faria uma chamada para obter a lista de notícias do seu backend
        // Exemplo simplificado de dados simulados
        const response = await fetch('https://api.example.com/noticias');
        const data = await response.json();
        setNoticias(data.noticias); // Atualiza o estado com as notícias recebidas
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchNoticias();
  }, []); // Executa apenas uma vez ao montar o componente

  const handleEditarNoticia = (noticiaId) => {
    // Lógica para redirecionar para a página de edição da notícia
    console.log(`Editar notícia com ID ${noticiaId}`);
  };

  const handleExcluirNoticia = (noticiaId) => {
    // Lógica para excluir uma notícia
    console.log(`Excluir notícia com ID ${noticiaId}`);
    // Implemente a lógica para excluir a notícia no backend e atualizar a lista
    // Exemplo: fetch(`/api/noticias/${noticiaId}`, { method: 'DELETE' })
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Gerenciar Notícias</h1>
      <p>Adicione, edite ou exclua notícias aqui:</p>

      <div className="mt-4">
        <h2 className="text-xl font-bold">Lista de Notícias</h2>
        <ul className="mt-2">
          {noticias.map((noticia) => (
            <li key={noticia.id} className="flex justify-between items-center bg-gray-100 p-3 rounded mb-2">
              <div>
                <h3 className="font-semibold">{noticia.titulo}</h3>
                <p className="text-sm text-gray-600">{noticia.resumo}</p>
              </div>
              <div>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  onClick={() => handleEditarNoticia(noticia.id)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleExcluirNoticia(noticia.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
          {noticias.length === 0 && <li>Nenhuma notícia encontrada.</li>}
        </ul>
      </div>
    </div>
  );
};

export default GerenciarNoticias;
