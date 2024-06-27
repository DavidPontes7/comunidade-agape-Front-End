import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../componentes/navbar/navbar';

const GerenciarConteudos = () => {
  // Exemplo de lista de publicações
  const [publicacoes, setPublicacoes] = useState([
    { id: 1, titulo: 'Notícia Importante', tipo: 'noticia', status: 'publicado', imageUrl: 'https://via.placeholder.com/150', data: '2024-06-16', admin: 'Admin A' },
    { id: 2, titulo: 'Formação Espiritual', tipo: 'formacao', status: 'rascunho', imageUrl: 'https://via.placeholder.com/150', data: '2024-06-15', admin: 'Admin B' },
    { id: 3, titulo: 'Novidades da Comunidade', tipo: 'noticia', status: 'publicado', imageUrl: 'https://via.placeholder.com/150', data: '2024-06-14', admin: 'Admin A' },
  ]);

  const [filtroData, setFiltroData] = useState('');
  const [filtroAdmin, setFiltroAdmin] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('');

  const handleExcluirPublicacao = (id) => {
    
    
    const publicacoesAtualizadas = publicacoes.filter(pub => pub.id !== id);
    setPublicacoes(publicacoesAtualizadas);
  };

  const handleFiltrar = () => {
    
    let publicacoesFiltradas = [...publicacoes];

    if (filtroData) {
      publicacoesFiltradas = publicacoesFiltradas.filter(pub => pub.data === filtroData);
    }

    if (filtroAdmin) {
      publicacoesFiltradas = publicacoesFiltradas.filter(pub => pub.admin.toLowerCase().includes(filtroAdmin.toLowerCase()));
    }

    if (filtroTipo) {
      publicacoesFiltradas = publicacoesFiltradas.filter(pub => pub.tipo === filtroTipo);
    }

    return publicacoesFiltradas;
  };

  return (
    <div className="bg-white">
      <AdminSidebar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Gerenciar Conteúdos</h2>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Publicações</h3>
          <Link to="/admin/criar" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
            Criar Novo Conteúdo
          </Link>
        </div>
        <div className="flex items-center mb-4 space-x-4">
          <div className="relative text-gray-600">
            <input
              type="date"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border border-gray-300"
              value={filtroData}
              onChange={(e) => setFiltroData(e.target.value)}
            />
          </div>
          <div className="relative text-gray-600">
            <input
              type="text"
              placeholder="Filtrar por admin..."
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border border-gray-300"
              value={filtroAdmin}
              onChange={(e) => setFiltroAdmin(e.target.value)}
            />
          </div>
          <div className='relative text-gray-600'>
            <input 
              type="text"
              placeholder='Filtrar por tipo'
              className='bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border border-gray-300'
              value={filtroTipo}
              onChange={(e) => setFiltroTipo(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {handleFiltrar().map((pub) => (
            <div key={pub.id} className="bg-white shadow-lg p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">{pub.titulo}</h4>
              <p className="text-sm mb-2">{pub.tipo === 'noticia' ? 'Notícia' : 'Formação'}</p>
              <p className="text-sm text-gray-500 mb-2">{pub.status === 'publicado' ? 'Publicado' : 'Rascunho'}</p>
              <img src={pub.imageUrl} alt={pub.titulo} className="rounded-lg mb-2" />
              <div className="flex space-x-2">
                <button className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200">
                  Editar
                </button>
                <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                  onClick={() => handleExcluirPublicacao(pub.id)}>
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GerenciarConteudos;
