import React, { useState } from 'react';

interface FormacaoFormData {
    title: string;
    author: string;
    date: string;
    text: string;
    image: string;
    category: string;
}

interface FormacaoFormularioProps {
    onFormSubmit: (formData: FormacaoFormData) => void;
}

const FormacaoFormulario: React.FC<FormacaoFormularioProps> = ({ onFormSubmit }) => {
    const [formacaoData, setFormacaoData] = useState<FormacaoFormData>({
        title: '',
        author: '',
        date: '',
        text: '',
        image: '',
        category: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormacaoData({ ...formacaoData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFormSubmit(formacaoData);
        setFormacaoData({
            title: '',
            author: '',
            date: '',
            text: '',
            image: '',
            category: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Título</label>
                <input type="text" id="title" name="title" value={formacaoData.title} onChange={handleChange} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
                <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Autor</label>
                <input type="text" id="author" name="author" value={formacaoData.author} onChange={handleChange} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Data</label>
                <input type="date" id="date" name="date" value={formacaoData.date} onChange={handleChange} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
                <label htmlFor="text" className="block text-gray-700 font-bold mb-2">Texto</label>
                <textarea id="text" name="text" value={formacaoData.text} onChange={handleChange} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none h-32" required></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 font-bold mb-2">URL da Imagem</label>
                <input type="url" id="image" name="image" value={formacaoData.image} onChange={handleChange} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Categoria</label>
                <input type="text" id="category" name="category" value={formacaoData.category} onChange={handleChange} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Publicar</button>
        </form>
    );
};

export default FormacaoFormulario;
