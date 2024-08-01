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
    banner: '',
    categoriaId: '',
  });

  const [file, setFile] = useState<File | null>(null);

  //Categoria
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = sessionStorage.getItem('@AuthUser:token');
        if (!token) {
          throw new Error('Token não encontrado');
        }

        const response = await api.get('/category', {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });
        setCategories(response.data);

      } catch (error) {
        console.error('Houve erro ao buscar Categorias', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchConteudo = async () => {
      try {
        const token = sessionStorage.getItem('@AuthUser:token');
        if (!token) {
          throw new Error('Token não encontrado');
        }

        const response = await api.get(`/conteudo/${id}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });

        setEditContent(response.data);
      } catch (error) {
        console.error("Houve um erro ao buscar o conteúdo", error);
      }
    };

    fetchConteudo();
  }, [id]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
  };

  const updateConteudo = async () => {
    try {
      const token = sessionStorage.getItem('@AuthUser:token');
      if (!token) {
        throw new Error('Token não encontrado');
      }

      const formData = new FormData();
      formData.append('id', editContent.id);
      formData.append('titulo', editContent.titulo);
      formData.append('corpo', editContent.corpo);
      formData.append('autor', editContent.autor);
      formData.append('categoriaId', editContent.categoriaId);

      if (file) {
        formData.append('banner', file);
      }

      await api.put(`/conteudo/${editContent.id}`, formData, {
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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Editar Conteúdo</h2>
      <input
        type="text"
        value={editContent.titulo}
        onChange={(e) => setEditContent({ ...editContent, titulo: e.target.value })}
        className="border-gray-300 rounded-md px-4 py-2 w-full mb-4"
        placeholder="Título"
      />
      <ReactQuill
        value={editContent.corpo}
        onChange={(content) => setEditContent({ ...editContent, corpo: content })}
        className="border-gray-300 rounded-md px-4 py-2 w-full mb-4"
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
      <input
        type="text"
        value={editContent.autor}
        onChange={(e) => setEditContent({ ...editContent, autor: e.target.value })}
        className="border-gray-300 rounded-md px-4 py-2 w-full mb-4"
        placeholder="Autor"
      />
      <input
        id="banner"
        className="block w-full p-3 border rounded-lg text-lg"
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        required
      />

      <div className="mb-6">
        <label htmlFor="categoria" className="block mb-2 text-lg font-medium text-gray-700">
          Categoria
        </label>
        <select
          id="categoria"
          value={editContent.categoriaId}
          onChange={(e) => setEditContent({ ...editContent, categoriaId: e.target.value })}
          className="block w-full p-3 border rounded-lg text-lg"
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

      <div className="flex justify-end">
        <button onClick={updateConteudo} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">Salvar</button>
        <button onClick={() => navigate('/gerenciar-conteudos')} className="px-4 py-2 bg-gray-300 text-gray-700 rounded ml-4 hover:bg-gray-400 transition duration-200">Cancelar</button>
      </div>
    </div>
  );
};

export default EditarConteudo;
