import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../../componentes/cards/cards';

const Formacoes: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [conteudos, setConteudos] = useState<Conteudo[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const itemsPerPage = 6;

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
    //Cards Lateral
    const NewsCard = ({ date, title, imageUrl, link }: any) => {
        return (
            <div className="flex items-start mb-6 pb-6 border-b border-gray-200">
                <Link to={link} className="inline-block mr-5">
                    <div
                        className="w-20 h-20 bg-cover bg-center "
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    ></div>
                </Link>
                <div className="text-base">
                    <p className="text-gray-600 text-sm mb-2">{date}</p>
                    <a href={link} className="text-gray-900 font-semibold hover:text-red-600 leading-tight" target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </div>
            </div>
        );
    };

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
    const filteredData = conteudos.filter(formacao => {
        const matchSearch = formacao.titulo.toLowerCase().includes(searchTerm.toLowerCase());
        const matchCategory = selectedCategory ? formacao.categoriaId === selectedCategory : true;
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
    const singleConteudo = conteudos.length > 1 ? conteudos[0] : null;

    return (
        <div className="bg-white mx-auto py-4 lg:px-4">
            <section className="relative text-black h-20 flex items-center justify-center">
                <span className="relative w-full flex justify-center">
                    <div className="absolute w-full inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
                    <span className="relative z-10 my-1 bg-stone-600 text-white font-bold px-6 py-2 rounded-full shadow-lg">
                        Formações e Ensinamentos
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
                                                <img className="w-full" src={`http://localhost:3333/files/${singleConteudo.banner}`} alt={singleConteudo.titulo} />
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
                                            <a href="#" className="flex items-center hover:text-indigo-600">
                                                <svg className="text-gray-700" fill="currentColor" height="16px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                </svg>
                                                <span className="ml-1">{singleConteudo.autor}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        <div className="grid grid-cols-1 gap-4">
                            {filteredData.slice(indexOfFirstItem, indexOfLastItem)
                                .filter(conteudo => conteudo.categoria.name == "formacao"
                                    || conteudo.categoria.name == "espiritualidade"
                                    || conteudo.categoria.name == "martires"
                                    || conteudo.categoria.name == "santos"
                                    || conteudo.categoria.name == "oracao")

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
                                            className={`px-3 py-1 rounded-md ${currentPage === number + 1 ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
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
                                    .filter(category => category.name === "formacao" || category.name === "espiritualidade" || category.name === "martires" || category.name === "oracao")
                                    .map((category) => (
                                        <li
                                            key={category.id}
                                            className={`cursor-pointer hover:text-red-600 font-serif ${selectedCategory === category.id ? 'font-semibold text-indigo-600' : ''}`}
                                            onClick={() => handleCategorySelect(category.id)}
                                        >
                                            {category.name}
                                        </li>
                                    ))}
                            </ul>

                        </div>

                        <div className="w-full lg:mt-96 lg:py-24 lg:w-flex ">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-red-700" style={{ fontFamily: 'aktiv-grotesk, sans-serif', fontWeight: 500 }}>
                                    Formações Especiais do Fundador
                                </h2>
                                <hr className="border-t-2 border-red-700 my-4 w-28" />
                            </div>
                            <NewsCard
                                date="Formação"
                                title="Nosso Fundador: Ensinamentos Profundos sobre Pentecostes."
                                imageUrl="https://images.squarespace-cdn.com/content/v1/63e64be0831faf1c806eacdb/a1c30e22-5094-46c4-913c-3355d274543d/Pentecostes.jpg"
                                link="https://youtu.be/PN9E2CSq_RA?si=2GkJEbyNdJP-KPaE"
                            />
                            <NewsCard
                                date="Formação"
                                title="A Conversão de Mateus: Reflexões a Partir do Evangelho de Mateus (Mt 9,9-13)"
                                imageUrl="https://www.aves.org.br/wp-content/uploads/2021/07/Jesus-e-Mateus.jpg"
                                link="https://youtu.be/v6q-nnNKpGc?si=2qsFcB8UTUUW4G7S"
                            />
                            <NewsCard
                                date="Formação"
                                title="Nosso Fundador: Reflexões Inspiradoras sobre Nossa Senhora"
                                imageUrl="https://www.paieterno.com.br/wp-content/uploads/2023/05/suplica-a-nossa-senhora-das-gracas.jpg"
                                link="https://youtu.be/vsBHQqeFwmM?si=bM86MPSMs4xmO66T"
                            />
                            <NewsCard
                                date="Formação"
                                title="A moeda, a Ovelha e o Filho Pródigo"
                                imageUrl="https://img.freepik.com/fotos-premium/imagem-xaa-capturando-a-cena-da-ovelha-perdida-sendo-carinhosamente-levada-de-volta-pelo-pastor_958297-9562.jpg"
                                link="https://youtu.be/xI-4-aYb3Ws?si=4AudBydwLkfIroUh"
                            />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Formacoes;
