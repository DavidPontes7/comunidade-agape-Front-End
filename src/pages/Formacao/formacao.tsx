import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
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
  const [procurarTermo, setProcurarTermo] = useState('');
  const [atualPagina, setAtualPagina] = useState(1);
  const formacaoPerPage = 6;
  // const navigate = useNavigate();

  const filteredFormacao = formacao.filter(item =>
    item.title.toLowerCase().includes(procurarTermo.toLowerCase())
  );

  const indexOfLastFormacao = atualPagina * formacaoPerPage;
  const indexOfFirstFormacao = indexOfLastFormacao - formacaoPerPage;
  const currentFormacao = filteredFormacao.slice(indexOfFirstFormacao, indexOfLastFormacao);

  const paginate = (pageNumber: number) => setAtualPagina(pageNumber);

  // const handleReadMore = (id: number) => {
  //   navigate(`/formacao/${id}`);
  // };

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
        
          <div className="max-w-md ">
          <div className="flex m-5">
            <svg className="w-6 h text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        
            <input
              type="text"
              placeholder="Pesquisar formações"
              value={procurarTermo}
              onChange={e => setProcurarTermo(e.target.value)}
              className="w-70 px-4 py-2 border  border-gray-300 rounded-xl mt-7 m-5 p-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            
            />
            </div>
          </div>

          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentFormacao.map((formacaoItem) => (
              <Card
                key={formacaoItem.id}
                id={formacaoItem.id}
                imagem={formacaoItem.image}
                titulo={formacaoItem.title}
                autor={formacaoItem.author}
                data={formacaoItem.date}
                descricao={formacaoItem.description}
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
                    className={`px-3 py-1 rounded-md ${atualPagina === number + 1 ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
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
