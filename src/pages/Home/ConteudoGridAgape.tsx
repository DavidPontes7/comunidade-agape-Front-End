import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { api } from '../../services/api';

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

const maxTituloLength = 100;

const baseUrl = import.meta.env.VITE_BASE_URL;

const ConteudoGridAgape: React.FC = () => {
    const [data, setData] = useState<Conteudo[]>([]);
    //chamada conteudos api
    useEffect(() => {
        const fetchConteudo = async () => {
            try {
                const response = await api.get('/conteudo');
                const conteudos: Conteudo[] = response.data.map((conteudo: any) => ({
                    id: conteudo.id,
                    titulo: conteudo.titulo,
                    corpo: conteudo.corpo,
                    autor: conteudo.autor,
                    banner: conteudo.banner,
                    publicadoEm: conteudo.publicadoEm,
                    categoriaId: conteudo.categoriaId,
                    categoria: {
                        name: conteudo.categoria.name,
                    },
                }));
                const filteredConteudos = conteudos.filter(conteudo => conteudo.categoria.name == 'agape'
                    || conteudo.categoria.name == 'santos'
                    || conteudo.categoria.name == 'formacao'
                    || conteudo.categoria.name == 'martires'
                );
                setData(filteredConteudos);
            } catch (error) {
                console.error("Houve um erro ao buscar os conteúdos", error);
            }
        };

        fetchConteudo();
    }, []);

    const renderFirstContent = () => {
        if (data.length === 0) return null;
        const firstContent = data[0];

        return (
            <motion.div
                className="container  sm:col-span-12 md:col-span-6 lg:col-span-5 sm:grid columns-1"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link to={`/conteudo/${firstContent.id}`}>
                    <div
                        className="relative md:h-full h-96 bg-cover bg-center overflow-hidden shadow"
                        style={{
                            backgroundImage: `url(${baseUrl}/files/${firstContent.banner})`,
                            backgroundSize: 'cover',
                        }}
                        title={firstContent.titulo}
                    >
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75  text-white py-3 px-4">
                            <Link
                                to={`/conteudo/${firstContent.id}`}
                                className="text-xs uppercase font-medium  hover:text-gray-300 transition duration-300 ease-in-out"
                            >
                                {firstContent.categoria.name}
                            </Link>
                            <Link
                                to={`/conteudo/${firstContent.id}`}
                                className="block font-bold text-2xl mb-2 hover:text-red-600 transition duration-300 ease-in-out"
                            >
                                {firstContent.titulo.length > maxTituloLength
                                    ? `${firstContent.titulo.substring(0, maxTituloLength)}...`
                                    : firstContent.titulo}
                            </Link>
                        </div>
                    </div>
                </Link>
            </motion.div>
        );
    };

    const renderContentCards = () => {
        const contentToShow = data.slice(1, 4);

        return (
            <div className="sm:col-span-12 md:col-span-6 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {contentToShow.map((conteudo, index) => (
                    <motion.div
                        key={conteudo.id}
                        className={`relative h-64 bg-cover bg-center overflow-hidden shadow ${index === 2 ? 'sm:col-span-2' : ''}`}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <Link to={`/conteudo/${conteudo.id}`}>
                            <div
                                style={{
                                    backgroundImage: `url(${baseUrl}/files/${conteudo.banner})`,
                                    backgroundPosition: 'center'
                                }}
                                className="absolute top-0 left-0 right-0 bg-cover bottom-0 bg-black bg-opacity-50 flex flex-col justify-end py-3 px-4"
                                title={conteudo.titulo}
                            >
                                <Link
                                    to={`/conteudo/${conteudo.id}`}
                                    className="block font-semibold text-lg mb-2 text-white hover:text-red-600 transition duration-300 ease-in-out"
                                >
                                    {conteudo.titulo}
                                </Link>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <div className=" mx-auto lg:p-5 lg:pl-0 md:p-10 l">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                {renderFirstContent()}
                {renderContentCards()}
            </div>
        </div>
    );
};

export default ConteudoGridAgape;
