import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css'; // Estilo do tema "snow"
import ReactQuill from 'react-quill';
import { api } from '../../../services/api';

interface Category {
  id: string;
  name: string;
}

const PublicarConteudo: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState('');
  const [titulo, setTitulo] = useState('');
  const [corpo, setCorpo] = useState('');
  const [autor, setAutor] = useState('');
  const [banner, setBanner] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const token = sessionStorage.getItem('@AuthUser:token');
      if (!token) {
        throw new Error('Token não encontrado');
      }

      // Construir o FormData com os dados a enviar
      const formData = new FormData();
      formData.append('categoriaId', category);
      formData.append('titulo', titulo);
      formData.append('corpo', corpo);
      formData.append('autor', autor);
      
      if (banner) {
        formData.append('file', banner);
      }

      await api.post('/conteudo', formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart/form-data',
          
        },
        
      });

      setCategory('');
      setTitulo('');
      setCorpo('');
      setAutor('');
      setBanner(null);
      setIsLoading(false);
      toast.success('Conteúdo publicado com sucesso!');
      navigate('/GerenciarConteudo');
    } catch (error) {
      setIsLoading(false);
      setError('Houve um erro ao publicar o conteúdo. Por favor, tente novamente.');
      console.error('Erro ao publicar conteúdo:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setBanner(e.target.files[0]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Publicar Conteúdo</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="categoria" className="block mb-2 text-lg font-medium text-gray-700">
              Categoria
            </label>
            <select
              id="categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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

          <div className="mb-6">
            <label htmlFor="titulo" className="block mb-2 text-lg font-medium text-gray-700">
              Título
            </label>
            <input
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="block w-full p-3 border rounded-lg text-lg"
              placeholder="Digite o título"
              type="text"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="corpo" className="block mb-2 text-lg font-medium text-gray-700">
              Descrição
            </label>
            <ReactQuill
              id="corpo"
              value={corpo}
              onChange={setCorpo}
              className="block w-full border rounded-lg"
              placeholder="Digite a descrição"
              modules={{
                toolbar: [
                  [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                  [{size: []}],
                  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                  [{'list': 'ordered'}, {'list': 'bullet'},
                  {'indent': '-1'}, {'indent': '+1'}],
                  ['link', 'image', 'video'],
                  ['clean'],
                  ['formula']
                ]
              }}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="autor" className="block mb-2 text-lg font-medium text-gray-700">
              Autor
            </label>
            <input
              id="autor"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              className="block w-full p-3 border rounded-lg text-lg"
              placeholder="Digite o nome do autor"
              type="text"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="banner" className="block mb-2 text-lg font-medium text-gray-700">
              Banner (imagem ou vídeo)
            </label>
            <input
              id="banner"
              onChange={handleFileChange}
              className="block w-full p-3 border rounded-lg text-lg"
              type="file"
              accept="image/*,video/*"
              required
            />
            {banner && (
              <div className="mt-2">
                <p className="text-sm text-gray-500">{banner.name}</p>
              </div>
            )}
          </div>

          <button
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-lg"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              'Publicar'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PublicarConteudo;
