import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../componentes/cards/cards'; // Componente Card - ajuste o caminho conforme necessário
import { formacao } from '../../data/Formacao-Item/FormacaoData';


const FormacaoTags = () => (
  <div className="lg:w-1/4 lg:pl-8 flex flex-col mt-12 lg:mt-0">
    <h2 className="text-2xl font-bold mb-4">Tags</h2>
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Tópicos de Formação</h3>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-blue-500 hover:underline">Teologia</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">Espiritualidade</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">História da Igreja</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">Formação Vocacional</a>
        </li>
      </ul>
    </div>
  </div>
);

const Formacao: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const formacaoPerPage = 6;
  const navigate = useNavigate();

  const filteredFormacao = formacao.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastFormacao = currentPage * formacaoPerPage;
  const indexOfFirstFormacao = indexOfLastFormacao - formacaoPerPage;
  const currentFormacao = filteredFormacao.slice(indexOfFirstFormacao, indexOfLastFormacao);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleReadMore = (id: number) => {
    navigate(`/formacao/${id}`);
  };

  return (
    <div>

      <section className="relative bg-gradient-to-b from-blue-500 to-indigo-600 text-white h-96 flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl lg:text-7xl font-extrabold uppercase tracking-wide">Formações</h1>
          <p className="text-lg mt-4">Explore nossas formações educativas</p>
        </div>
      </section>

      <div className="container mx-auto py-8 flex flex-wrap justify-center px-4 md:px-8">
        <div className="w-full lg:w-3/4 lg:pr-8">
        
          <div className="mb-4">
            <input
              type="text"
              placeholder="Pesquisar formações"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentFormacao.map((formacaoItem) => (
              <Card
                key={formacaoItem.id}
                id={formacaoItem.id}
                image={formacaoItem.image}
                title={formacaoItem.title}
                author={formacaoItem.author}
                date={formacaoItem.date}
                description={formacaoItem.description}
                link={`/Formacao/${formacaoItem.id}`}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <ul className="flex space-x-1">
              {[...Array(Math.ceil(filteredFormacao.length / formacaoPerPage)).keys()].map(number => (
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
        <FormacaoTags />
      </div>

    </div>
  );
};

export default Formacao;
