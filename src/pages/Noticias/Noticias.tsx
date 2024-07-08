import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../../componentes/cards/cards';

const Noticias: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [conteudos, setConteudos] = useState<Conteudo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const itemsPerPage = 12;

  interface Category {
    id: string;
    name: string;
  }

  interface Conteudo {
    id: string;
    titulo: string;
    corpo: string;
    autor: string;
    banner: string;
    publicadoEm: string;
    categoriaId: string;
    categoria: {
      name: string;
    };
  }

  // Fetch categorias from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>('http://localhost:3333/category', {
          headers: {},
        });
        setCategories(response.data);
      } catch (error) {
        console.error('Houve erro ao buscar Categorias', error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch conteudo from API
  useEffect(() => {
    const fetchConteudo = async () => {
      try {
        const response = await axios.get<Conteudo[]>('http://localhost:3333/conteudo');
        setConteudos(response.data);
      } catch (error) {
        console.error('Houve um erro ao buscar os conteúdos', error);
      }
    };

    fetchConteudo();
  }, []);

  // Filtered data based on search term and selected category
  const filteredData = conteudos.filter(noticia => {
    const matchSearch = noticia.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory ? noticia.categoriaId === selectedCategory : true;
    return matchSearch && matchCategory;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Pagination handler
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle category selection
  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  // Display single content if available
  const singleConteudo = filteredData.slice(indexOfFirstItem, indexOfLastItem)
    .find(conteudo =>
      ["noticia", "opinião", "igreja", "papa", "eventos","acampamentos"].includes(conteudo.categoria.name)
    );

  return (
    <div className="bg-white mx-auto py-4 lg:px-4">
      <section className="relative  text-black h-20 flex items-center justify-center">

        <span className="relative w-full  flex justify-center">
          <div className="absolute  w-full inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span className="relative lg:text-lg  my-1 bg-stone-600 text-white font-bold px-6 py-2 rounded-full shadow-lg">
            Artigos e Notícias
          </span>

        </span>

      </section>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4 lg:pr-8">
            {singleConteudo && (
              <section key={singleConteudo.id} className="bg-transparent flex flex-wrap items-center justify-center mb-8">
                <div className="max-w-screen-lg mx-auto">
                  <div className="rounded overflow-hidden flex flex-col mx-auto mb-4">
                    <Link to={`/conteudo/${singleConteudo.id}`} className="text-3xl font-semibold hover:text-red-700 transition duration-500 ease-in-out mb-2 block">
                      {singleConteudo.titulo}
                    </Link>
                    <div className="relative mb-4">
                      <Link to={`/conteudo/${singleConteudo.id}`}>
                        <img className="w-full" src={`http://localhost:3333/files/${singleConteudo.banner}`} style={{ maxHeight: '500px', maxWidth: '1200px', backgroundSize: 'cover' }} alt={singleConteudo.titulo} />

                      </Link>
                    </div>
                    <div className="line-clamp-3 overflow-hidden text-ellipsis mb-4" dangerouslySetInnerHTML={{ __html: singleConteudo.corpo }} />
                    <div className="py-5 text-sm font-normal text-gray-900 flex items-center justify-between">
                      <span className="mr-3 flex items-center">
                        <svg className="text-red-600" fill="currentColor" height="13px" width="13px" viewBox="0 0 512 512">
                          <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                        </svg>
                        <span className="ml-1">{singleConteudo.publicadoEm}</span>
                      </span>
                      <div className="flex items-center hover:text-indigo-600">
                        <svg className="text-gray-700" fill="currentColor" height="16px" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                          <path d="M0 0h24v24H0z" fill="none"></path>
                        </svg>
                        <span className="ml-1">{singleConteudo.autor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            <div className="grid grid-cols-1 gap-4">
              {filteredData.slice(indexOfFirstItem, indexOfLastItem)
                .filter(conteudo => conteudo.categoria.name == "noticia"
                  || conteudo.categoria.name == "agape"
                  || conteudo.categoria.name == "papa"
                  || conteudo.categoria.name == "igreja"
                  || conteudo.categoria.name == "opinião"
                  || conteudo.categoria.name == "acampamento"

                )
                .map((conteudo) => (

                  <Card key={conteudo.id} conteudo={conteudo} />
                ))}
            </div>

            <div className="mt-8 flex justify-center">
              <ul className="flex space-x-1">
                {[...Array(Math.ceil(filteredData.length / itemsPerPage)).keys()].map(number => (
                  <li key={number}>
                    <button
                      onClick={() => paginate(number + 1)}
                      className={`px-3 py-1 rounded-md ${currentPage === number + 1 ? 'bg-amber-600 text-white' : 'bg-amber-600 text-white hover:bg-blue-600'}`}
                    >
                      {number + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar with categories */}
          <div className="w-full lg:w-1/4 lg:mt-8">
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-xl font-bold text-gray-700 mb-4" style={{ fontFamily: 'Arial' }}>Categorias</h2>
              <ul className="space-y-2 text-center lg:text-left">
                <li
                  key="all"
                  className={`cursor-pointer hover:text-red-600 ${selectedCategory === null ? 'font-semibold text-indigo-600' : ''}`}
                  onClick={() => handleCategorySelect(null)}
                >
                  Todas
                </li>
                {categories
                  .filter(category => category.name != "formacao"
                    && category.name != "espiritualidade"
                    && category.name != "martires"
                    && category.name != "oracao")

                  .map((category) => (
                    <li
                      key={category.id}
                      className={`cursor-pointer hover:text-red-600 font-serif ${selectedCategory === category.id ? 'font-semibold text-indigo-600' : ''}`}
                      onClick={() => handleCategorySelect(category.id)}
                    >
                      #{category.name}
                    </li>
                  ))
                }

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
