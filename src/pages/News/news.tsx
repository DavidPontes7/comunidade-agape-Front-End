import React, { useState } from 'react';
import foto from './../../img/anos20.jpg';

const fakeNews = [
    {
        id: 1,
        title: 'Lorem Ipsum Dolor Sit Amet',
        image: '',
        author: 'John Doe',
        date: 'April 20, 2024',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut fringilla enim...'
    },
    {
        id: 2,
        title: 'A comunidade Católica Àgape completa 20 anos de história',
        image: foto,
        author: 'Mauricio',
        date: 'April 22, 2024',
        text: 'Sed consequat est nec justo convallis dapibus. Vestibulum et elit ut libero...'
    },
    {
        id: 1,
        title: 'Lorem Ipsum Dolor Sit Amet',
        image: '',
        author: 'John Doe',
        date: 'April 20, 2024',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut fringilla enim...'
    },
    {
        id: 1,
        title: 'Lorem Ipsum Dolor Sit Amet',
        image: '',
        author: 'John Doe',
        date: 'April 20, 2024',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut fringilla enim...'
    },
    {
        id: 1,
        title: 'Lorem Ipsum Dolor Sit Amet',
        image: '',
        author: 'John Doe',
        date: 'April 20, 2024',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut fringilla enim...'
    },
    {
        id: 1,
        title: 'Lorem Ipsum Dolor Sit Amet',
        image: '',
        author: 'John Doe',
        date: 'April 20, 2024',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut fringilla enim...'
    },
    {
        id: 1,
        title: 'Lorem Ipsum Dolor Sit Amet',
        image: '',
        author: 'John Doe',
        date: 'April 20, 2024',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut fringilla enim...'
    },
    {
        id: 1,
        title: 'Lorem Ipsum Dolor Sit Amet',
        image: '',
        author: 'John Doe',
        date: 'April 20, 2024',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut fringilla enim...'
    },
    
    // Adicione mais notícias conforme necessário
];

const NewsTags = () => (
    <div className="lg:w-1/4 lg:pl-8 flex flex-col mt-12 lg:mt-0">
        <h2 className="text-2xl font-bold mb-4">Tags</h2>
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Tópicos Relacionados</h3>
            <ul className="space-y-2">
                <li>
                    <a href="#" className="text-blue-500 hover:underline">Ágape</a>
                </li>
                <li>
                    <a href="#" className="text-blue-500 hover:underline">Caridade</a>
                </li>
                <li>
                    <a href="#" className="text-blue-500 hover:underline">História da Igreja</a>
                </li>
                
            </ul>
        </div>
    </div>
);

const NewsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 6; // Número de notícias por página

    // Lógica para filtrar as notícias com base no termo de pesquisa
    const filteredNews = fakeNews.filter(news =>
        news.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Lógica para paginação
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

    // Função para alterar a página atual
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto py-8 flex flex-wrap justify-center px-4 md:px-8">
            <div className="w-full lg:w-3/4 lg:pr-8">
                <h1 className="text-4xl font-bold mb-8 text-center lg:text-left">Últimas Notícias</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Pesquisar notícias"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {currentNews.map((news) => (
                        <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md transition transform hover:scale-105 hover:shadow-lg">
                            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                                <p className="text-gray-700 mb-2">Publicado por {news.author}</p>
                                <p className="text-gray-700 mb-2">{news.date}</p>
                                <p className="text-gray-700">{news.text}</p>
                                <div className="mt-4">
                                    <button className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">Ler Mais</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Elemento de paginação */}
                <div className="mt-8">
                    <ul className="flex justify-center">
                        {[...Array(Math.ceil(filteredNews.length / newsPerPage)).keys()].map(number => (
                            <li key={number} className="mx-1">
                                <button onClick={() => paginate(number + 1)} className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">{number + 1}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <NewsTags />
        </div>
    );
};

export default NewsPage;
