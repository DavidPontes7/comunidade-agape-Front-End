import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../../services/api';

const GerenciarConteudos = () => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
      console.error('Houve um erro ao buscar os conteúdos', error);
      toast.error('Erro ao buscar os conteúdos');
    }
  };

  useEffect(() => {
    fetchConteudo();
  }, []);

  const handleDeleteConfirmation = (conteudo_Id: string) => {
    setDeleteId(conteudo_Id);
    setIsDeleteModalOpen(true);
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

      setData(data.filter((item) => item.id !== deleteId));
      toast.success('Conteúdo excluído com sucesso');
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error(`Houve um erro ao excluir o conteúdo ${deleteId}:`, error);
      toast.error(`Erro ao excluir o conteúdo ${deleteId}`);
    }
  };

  const handleEdit = (content: { id: string }) => {
    navigate(`/editar-conteudo/${content.id}`);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6 ml-64"> {/* Ajuste o valor de ml-64 conforme a largura da sua navbar lateral */}
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Gerenciar Conteúdos</h2>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Publicações</h3>
          <Link to={'/conteudo'}>
            <button className="px-4 py-2 bg-zinc-500 text-white rounded hover:bg-blue-600 transition duration-200">
              Criar Novo Conteúdo
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-600 uppercase">ID</th>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-600 uppercase">Título</th>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-600 uppercase">Autor</th>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-600 uppercase">Publicado em</th>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-600 uppercase">Categoria</th>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-600 uppercase">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-gray-700">{item.id}</td>
                  <td className="px-6 py-4 text-gray-700">{item.titulo}</td>
                  <td className="px-6 py-4 text-gray-700">{item.autor}</td>
                  <td className="px-6 py-4 text-gray-700">{new Date(item.publicadoEm).toLocaleString()}</td>
                  <td className="px-6 py-4 text-gray-700">{item.categoria.name}</td>
                  <td className="px-6 py-4 text-gray-700">
                    <Link to={`/conteudo/${item.id}`} className="text-blue-500 hover:text-blue-700 mr-4">Ver</Link>
                    <button onClick={() => handleDeleteConfirmation(item.id)} className="text-red-500 hover:text-red-700 mr-4">Excluir</button>
                    <button onClick={() => handleEdit(item)} className="text-green-500 hover:text-green-700">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Confirmação de Exclusão</h3>
            <p className="mb-4">Por favor, confirme o ID do conteúdo que deseja excluir:</p>
            <input
              type="text"
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 text-gray-700"
              readOnly
            />
            <div className="flex justify-end space-x-4">
              <button onClick={deleteConteudo} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200">Confirmar Exclusão</button>
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GerenciarConteudos;
