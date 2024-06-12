import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { fakeNews } from '../../data/Noticia-Item/NoticiaData'; // Importe as notícias aqui

const NewsDetailPage: React.FC = () => {
    const { id: idParam } = useParams<{ id: string }>();
    const id = idParam ? parseInt(idParam) : undefined;
    const news = id ? fakeNews.find(newsItem => newsItem.id === id) : undefined;

    if (!news) {
        return <div className="container mx-auto mt-12 text-center text-gray-700">Notícia não encontrada</div>;
    }

    return (
        <div className="container mx-auto py-8 px-4 md:px-8">
            <div className="flex justify-between items-center mb-8">
                <Link to="/noticias" className="text-blue-500 hover:underline">&larr; Voltar para Notícias</Link>
                <p className="text-sm text-gray-600">{news.date} - Publicado por {news.author}</p>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{news.title}</h1>
            <img
                src={news.image}
                alt={news.title}
                className="w-full h-auto object-cover mb-8 rounded-lg shadow-md"
                style={{ maxHeight: '500px' }}
            />
            <div className="text-gray-800 leading-relaxed mb-8">
                <p className="mb-4">{news.text}</p>
            </div>
            <div className="flex justify-between items-center">
                <Link to="/noticias" className="text-blue-500 hover:underline">&larr; Voltar para Notícias</Link>
                <p className="text-sm text-gray-600">{news.date} - Publicado por {news.author}</p>
            </div>
        </div>
    );
};

export default NewsDetailPage;
