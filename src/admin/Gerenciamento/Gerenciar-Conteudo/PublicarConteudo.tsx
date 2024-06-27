import React, { useState, ChangeEvent, FormEvent } from 'react';
import AdminSidebar from '../../componentes/navbar/navbar';
import 'react-quill/dist/quill.snow.css'; // Importa os estilos do react-quill
import ReactQuill from 'react-quill';
import axios from 'axios';

// Define the types for the form fields
interface FormFields {
  title: string;
  content: string;
  date: string;
  type: 'news' | 'formation';
  image: File | null;
}

const AdminForm: React.FC = () => {
  const [formFields, setFormFields] = useState<FormFields>({
    title: '',
    content: '',
    date: '',
    type: 'news',
    image: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleContentChange = (value: string) => {
    setFormFields({
      ...formFields,
      content: value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormFields({
        ...formFields,
        image: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Crie um objeto FormData para enviar dados mistos (texto e arquivo)
      const formData = new FormData();
      formData.append('title', formFields.title);
      formData.append('content', formFields.content);
      formData.append('date', formFields.date);
      formData.append('type', formFields.type);
      if (formFields.image) {
        formData.append('image', formFields.image);
      }

      // Faça a requisição para o backend usando Axios
      const response = await axios.post('http://localhost:3000/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Necessário para enviar dados mistos
        },
      });

      console.log('Response:', response.data);
      // Limpe os campos do formulário após o envio bem-sucedido
      setFormFields({
        title: '',
        content: '',
        date: '',
        type: 'news',
        image: null,
      });

      alert('Conteúdo publicado com sucesso!');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Trate erros de envio aqui
      alert('Ocorreu um erro ao publicar o conteúdo. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div className="">
      <AdminSidebar />
      <div className="flex-grow p-6 bg-gray-100 rounded-lg m-6">
        <h2 className="text-2xl font-bold mb-6">Publicar Notícia ou Formação</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">Título:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formFields.title}
              onChange={handleChange}
              required
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">Conteúdo:</label>
            <ReactQuill
              value={formFields.content}
              onChange={handleContentChange}
              className="bg-white rounded-md shadow-sm"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="block text-lg font-medium text-gray-700 mb-2">Data de Publicação:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formFields.date}
              onChange={handleChange}
              required
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="type" className="block text-lg font-medium text-gray-700 mb-2">Tipo:</label>
            <select
              id="type"
              name="type"
              value={formFields.type}
              onChange={handleChange}
              required
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="news">Notícia</option>
              <option value="formation">Formação</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image" className="block text-lg font-medium text-gray-700 mb-2">Imagem:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="btn-submit bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600"
          >
            Publicar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
