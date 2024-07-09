import { useEffect, useState } from 'react';
import AdminNavbar from '../../componentes/navbar/navbar';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../../services/api';

const GerenciarConteudos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<{
    id: string;
    titulo: string;
    corpo: string;
    autor: string;
    banner: string;
    publicadoEm: string;
    categoriaId: string;
    categoria: {
      name: string;
    };
  }[]>([]);

  const [deleteId, setDeleteId] = useState<string>(''); 

  const fetchConteudo = async () => {
    try {
      const token = sessionStorage.getItem('@AuthUser:token');
      if (!token) {
        throw new Error('Token não encontrado');
      }

      const response = await api.get('/conteudo', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });

      const conteudos = response.data.map((conteudo: any) => ({
        id: conteudo.id,
        titulo: conteudo.titulo,
        corpo: conteudo.corpo,
        autor: conteudo.autor,
        banner: conteudo.banner,
        publicadoEm: conteudo.publicadoEm,
        categoriaId: conteudo.categoriaId,
        categoria: {
          name: conteudo.categoria.name,
        },
      }));

      setData(conteudos);
    } catch (error) {
      console.error("Houve um erro ao buscar os conteúdos", error);
    }
  };

  useEffect(() => {
    fetchConteudo();
  }, []);

  const handleDeleteConfirmation = (conteudo_Id: string) => {
    setDeleteId(conteudo_Id); // Armazena temporariamente o ID do conteúdo a ser excluído
    setIsModalOpen(true); // Abre o modal de confirmação
  };

  const deleteConteudo = async () => {
    try {
      const token = sessionStorage.getItem('@AuthUser:token');
      if (!token) {
        throw new Error('Token não encontrado');
      }

      await api.delete(`/conteudo/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });

      setData(data.filter(item => item.id !== deleteId));
      toast.success('Conteúdo excluído com sucesso');
      setIsModalOpen(false); 
    } catch (error) {
      console.error(`Houve um erro ao excluir o conteúdo ${deleteId}:`, error);
      toast.error(`Erro ao excluir o conteúdo ${deleteId}`);
    }
  };

  return (
    <div className="bg-white">
      <AdminNavbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Gerenciar Conteúdos</h2>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Publicações</h3>
          <Link to={'/conteudo'}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              Criar Novo Conteúdo
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase">id</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase">Título</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase">Autor</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase">Publicado em</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase">Categoria</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase">Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.titulo}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.autor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(item.publicadoEm).toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.categoria.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/conteudo/${item.id}`} className="text-blue-500 hover:text-blue-700">Ver</Link>
                    <button onClick={() => handleDeleteConfirmation(item.id)} className="ml-4 text-red-500 hover:text-red-700">Excluir</button>
                    <button className="ml-4 text-green-500 hover:text-green-700">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal de confirmação */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-md">
            <h3 className="text-lg font-semibold mb-4">Confirmação de Exclusão</h3>
            <p className="mb-4">Por favor, confirme o ID do conteúdo que deseja excluir:</p>
            <input
              type="text"
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)}
              className="border-gray-300 rounded-md px-4 py-2 w-full mb-4"
            />
            <div className="flex justify-end">
              <button onClick={deleteConteudo} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200">Confirmar Exclusão</button>
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded ml-4 hover:bg-gray-400 transition duration-200">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GerenciarConteudos;
