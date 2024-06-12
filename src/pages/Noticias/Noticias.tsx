import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeNews } from '../../data/Noticia-Item/NoticiaData'; // Importe as notícias aqui
import Card from '../../componentes/cards/cards'; // Importe o componente Card

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

const Noticias: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;
  const navigate = useNavigate();

  const filteredNews = fakeNews.filter(news =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleReadMore = (id: number) => {
    navigate(`/news/${id}`);
  };

  return (
    <div>

      <section className="relative bg-gradient-to-b from-blue-500 to-indigo-600 text-white h-96 flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl lg:text-7xl font-extrabold uppercase tracking-wide">Notícias</h1>
          <p className="text-lg mt-4">Fique atualizado com as nossas últimas novidades</p>
        </div>
      </section>

      <div className="container mx-auto py-8 flex flex-wrap justify-center px-4 md:px-8">
        <div className="w-full lg:w-3/4 lg:pr-8">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Pesquisar notícias"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentNews.map((news) => (
              <Card
                key={news.id}
                id={news.id}
                image={news.image}
                title={news.title}
                author={news.author}
                date={news.date}
                description={news.text}
                link={`/Noticias/${news.id}`}
              />
            ))}
          </div>

          


          <div className="mt-8 flex justify-center">
            <ul className="flex space-x-1">
              {[...Array(Math.ceil(filteredNews.length / newsPerPage)).keys()].map(number => (
                <li key={number}>
                  <button
                    onClick={() => paginate(number + 1)}
                    className={`px-3 py-1 rounded-md ${currentPage === number + 1 ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                  >
                    {number + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <NewsTags />
      </div>

      
    </div>
  );
};

export default Noticias;
