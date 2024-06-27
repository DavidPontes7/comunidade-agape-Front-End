import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fakeNews } from '../../data/Noticia-Item/NoticiaData'; // Importe as notícias aqui
import Card from '../../componentes/cards/cards'; // Importe o componente Card

const NewsTags = () => (
  <div className="lg:w-1/4 lg:pl-8 flex flex-col mt-12 lg:mt-0">
    <h2 className="text-2xl font-bold mb-4">Categorias</h2>
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Tópicos de Notícias</h3>
      <ul className="space-y-2">
        <li>
          <Link to='/Eventos' className="text-blue-500 hover:underline">Eventos da Comunidade</Link>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">Notícias Paroquiais</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">Notícias da Igreja Universal</a>
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
          <div className="max-w-md ">
            <div className="flex m-5">
              <svg className="w-6 h text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>

              <input
                type="text"
                placeholder="Pesquisar Noticias"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-70 px-4 py-2 border  border-gray-300 rounded-xl mt-7 m-5 p-8 focus:outline-none focus:ring-2 focus:ring-blue-500"

              />
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentNews.map((news) => (
              <Card
                key={news.id}
                id={news.id}
                imagem={news.image}
                titulo={news.title}
                autor={news.author}
                data={news.date}
                descricao={news.text}
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
