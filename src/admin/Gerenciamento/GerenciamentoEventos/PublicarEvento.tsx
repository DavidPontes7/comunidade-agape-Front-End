import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface EventoRequest {
  title: string;
  description: string;
  banner: string;
  date: string;
}

const PublicarEvento: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [banner, setBanner] = useState<File | null>(null);
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Se houver alguma inicialização assíncrona necessária, coloque aqui
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

      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('date', date);
      
      if (banner) {
        formData.append('banner', banner);
      }

      await axios.post('http://localhost:3333/evento', formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setTitle('');
      setDescription('');
      setBanner(null);
      setDate('');
      setIsLoading(false);
      toast.success('Evento publicado com sucesso!');
      navigate('/GerenciarEventos');
    } catch (error) {
      setIsLoading(false);
      setError('Houve um erro ao publicar o evento. Por favor, tente novamente.');
      console.error('Erro ao publicar evento:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setBanner(e.target.files[0]);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Publicar Evento</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">
              Título
            </label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full p-2 border rounded"
              placeholder="Digite o título do evento"
              type="text"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">
              Descrição
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full p-2 border rounded"
              placeholder="Digite a descrição do evento"
              rows={4}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block mb-2">
              Data do Evento
            </label>
            <input
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="block w-full p-2 border rounded"
              type="date"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="banner" className="block mb-2">
              Banner (imagem)
            </label>
            <input
              id="banner"
              onChange={handleFileChange}
              className="block w-full p-2 border rounded"
              type="file"
              accept="image/*"
              required
            />
            {banner && (
              <div className="mt-2">
                <p className="text-sm text-gray-500">{banner.name}</p>
              </div>
            )}
          </div>

          <button
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex justify-center items-center"
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

export default PublicarEvento;
