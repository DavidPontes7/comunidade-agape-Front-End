import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FormationPage: React.FC = () => {
    const [formationData, setFormationData] = useState<any[]>([]);

    useEffect(() => {
       
        fetch('URL_DO_BACKEND')
            .then(response => response.json())
            .then(data => setFormationData(data))
            .catch(error => console.error('Erro ao buscar conteúdo de formação:', error));
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Formação</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {formationData.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                            <p className="text-gray-700 mb-4">{item.description}</p>
                            <Link to={`/formation/${item.id}`} className="text-blue-500 hover:underline">Ver mais</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FormationPage;
