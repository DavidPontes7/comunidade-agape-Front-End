import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { formacao } from '../../data/Formacao-Item/FormacaoData'; // Importe os dados de formação aqui

const FormationDetailPage: React.FC = () => {
    const { id: idParam } = useParams<{ id: string }>();
    const id = idParam ? parseInt(idParam) : undefined;
    const formation = id ? formacao.find(formationItem => formationItem.id === id) : undefined;

    if (!formation) {
        return <div className="container mx-auto mt-12 text-center text-gray-700">Formação não encontrada</div>;
    }

    return (
        <div className="container mx-auto py-8 px-4 md:px-8">
            <div className="flex justify-between items-center mb-8">
                <Link to="/Formacao" className="text-blue-500 hover:underline">&larr; Voltar para Formações</Link>
                <p className="text-sm text-gray-600">{formation.date} - Autor: {formation.author}</p>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{formation.title}</h1>
            <img
                src={formation.image}
                alt={formation.title}
                className="w-full h-auto object-cover mb-8 rounded-lg shadow-md"
                style={{ maxHeight: '500px' }}
            />
            <div className="text-gray-800 leading-relaxed mb-8">
                <p className="mb-4">{formation.description}</p>
            </div>
            <div className="flex justify-between items-center">
                <Link to="/Formacao" className="text-blue-500 hover:underline">&larr; Voltar para Formações</Link>
                <p className="text-sm text-gray-600">{formation.date} - Autor: {formation.author}</p>
            </div>
        </div>
    );
};

export default FormationDetailPage;
