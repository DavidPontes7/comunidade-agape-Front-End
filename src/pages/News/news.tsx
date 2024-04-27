import React, { useState, useEffect } from 'react';

const NewsPage: React.FC = () => {
    const [newsData, setNewsData] = useState<any[]>([]);

    useEffect(() => {
        fetch('URL_DO_SEU_BACKEND')
            .then(response => response.json())
            .then(data => setNewsData(data))
            .catch(error => console.error('Erro ao buscar notícias:', error));
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Notícias da Comunidade</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {newsData.map((news) => (
                    <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img src={`https://via.placeholder.com/400?text=${news.title}`} alt={news.title} className="w-full h-full object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                            <p className="text-gray-700 mb-4">{news.date}</p>
                            <p className="text-gray-700">{news.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsPage;
