import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FormationDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [formationItem, setFormationItem] = useState<any>();

    useEffect(() => {
     
        fetch(`URL_DO_BACKEND/${id}`)
            .then(response => response.json())
            .then(data => setFormationItem(data))
            .catch(error => console.error('Erro ao buscar detalhes do conteúdo de formação:', error));
    }, [id]);

    if (!formationItem) return null;

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">{formationItem.title}</h1>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-4">
                    <p className="text-gray-700">{formationItem.content}</p>
                </div>
            </div>
        </div>
    );
}

export default FormationDetailPage;
