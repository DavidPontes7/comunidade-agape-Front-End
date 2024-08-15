import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../../services/api';
import ReactQuill from 'react-quill';

interface Category {
  id: string;
  name: string;
}

const EditarConteudo = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [editContent, setEditContent] = useState({
    id: '',
    titulo: '',
    corpo: '',
    autor: '',
    categoriaId: '',
  });

  const [file, setFile] = useState<File | null>(null);

  // Buscar categorias
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = sessionStorage.getItem('@AuthUser:token');
        if (!token) throw new Error('Token não encontrado');
        const response = await api.get('/category', {
          headers: { Authorization: `Bearer ${JSON.parse(token)}` },
        });
        setCategories(response.data);
      } catch (error) {
        console.error('Houve erro ao buscar Categorias', error);
      }
    };
    fetchCategories();
  }, []);

  // Buscar conteúdo
  useEffect(() => {
    const fetchConteudo = async () => {
      try {
        const token = sessionStorage.getItem('@AuthUser:token');
        if (!token) throw new Error('Token não encontrado');
        const response = await api.get(`/conteudo/${id}`, {
          headers: { Authorization: `Bearer ${JSON.parse(token)}` },
        });
        setEditContent(response.data);
      } catch (error) {
        console.error("Houve um erro ao buscar o conteúdo", error);
      }
    };
    fetchConteudo();
  }, [id]);

  // Manipulação de arquivos
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
  };

  // Atualizar conteúdo
  const updateConteudo = async () => {
    try {
      const token = sessionStorage.getItem('@AuthUser:token');
      if (!token) throw new Error('Token não encontrado');

      const formData = new FormData();
      formData.append('titulo', editContent.titulo);
      formData.append('corpo', editContent.corpo);
      formData.append('autor', editContent.autor);
      formData.append('categoriaId', editContent.categoriaId);

      if (file) {
        formData.append('file', file);
      }

      await api.put(`/conteudo/editar/${editContent.id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Conteúdo atualizado com sucesso');
      navigate('/GerenciarConteudo');
    } catch (error) {
      console.error(`Houve um erro ao atualizar o conteúdo ${editContent.id}:`, error);
      toast.error(`Erro ao atualizar o conteúdo ${editContent.id}`);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6 lg:ml-64">
        <div className="bg-white p-6 rounded-lg  max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Editar Conteúdo</h2>
          <form>
            <div className="mb-6">
              <label htmlFor="titulo" className="block text-lg font-medium text-gray-700 mb-2">
                Título
              </label>
              <input
                id="titulo"
                type="text"
                value={editContent.titulo}
                onChange={(e) => setEditContent({ ...editContent, titulo: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Título"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="corpo" className="block text-lg font-medium text-gray-700 mb-2">
                Corpo
              </label>
              <ReactQuill
                value={editContent.corpo}
                onChange={(content) => setEditContent({ ...editContent, corpo: content })}
                className="border border-gray-300 rounded-lg w-full"
                placeholder="Corpo"
                modules={{
                  toolbar: [
                    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                    [{ size: [] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' },
                    { 'indent': '-1' }, { 'indent': '+1' }],
                    ['link', 'image', 'video'],
                    ['clean'],
                    ['formula']
                  ]
                }}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="autor" className="block text-lg font-medium text-gray-700 mb-2">
                Autor
              </label>
              <input
                id="autor"
                type="text"
                value={editContent.autor}
                onChange={(e) => setEditContent({ ...editContent, autor: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Autor"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="banner" className="block text-lg font-medium text-gray-700 mb-2">
                Imagem ou Vídeo
              </label>
              <input
                id="banner"
                className="block w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="categoria" className="block text-lg font-medium text-gray-700 mb-2">
                Categoria
              </label>
              <select
                id="categoria"
                value={editContent.categoriaId}
                onChange={(e) => setEditContent({ ...editContent, categoriaId: e.target.value })}
                className="block w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              >
                <option value="">Selecione uma categoria</option>
                {categories.length > 0 ? (
                  categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    Nenhuma categoria disponível
                  </option>
                )}
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={updateConteudo}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
              >
                Salvar
              </button>
              <button
                type="button"
                onClick={() => navigate('/gerenciar-conteudos')}
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarConteudo;
