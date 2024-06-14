import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { faDonate, faEnvelope, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import Card from '../../componentes/cards/cards';
import { fakeNews } from '../../data/Noticia-Item/NoticiaData';
import { formacao } from '../../data/Formacao-Item/FormacaoData';
import { videos } from '../../data/Videos-item/VideosData';

const Home = () => {
    const [showMore, setShowMore] = useState(false);
    const [newsLimit, setNewsLimit] = useState(6);

    const handleShowMore = () => {
        setShowMore(true);
        setNewsLimit(fakeNews.length);
    };

    const [showMoreFormacao, setShowMoreFormacao] = useState(false);
    const [formacaoLimit, setFormacaoLimit] = useState(6);

    const handleShowMoreFormacao = () => {
        setShowMoreFormacao(true);
        setFormacaoLimit(formacao.length);
    };

    const [showVideo, setShowVideo] = useState(false);
    const [videoLimit, setVideoLimit] = useState(3);

    const handleShowMoreVideos = () => {
        setShowVideo(true);
        setVideoLimit(videos.length);
    };

    const scrollToInfo = () => {
        const infoSection = document.getElementById('infoSection');
        if (infoSection) {
            infoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const RadioSection = () => (
        <section className="mt-5 bg-gradient-to-b from-blue-600 to-indigo-600 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                            Ouça a Rádio da Comunidade
                        </h2>
                        <p className="text-lg sm:text-xl">
                            Sintonize na nossa rádio e fique por dentro de tudo que acontece na comunidade. Programação ao vivo, músicas, notícias e muito mais!
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-4 ">
                        <FontAwesomeIcon icon={faHeadphones} className='text-white text-8xl' />
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <Link to="/radio" className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-full font-semibold uppercase tracking-wide animate-pulse">
                        Ouvir Agora
                    </Link>
                </div>
            </div>
        </section>
    );

    return (
        <div className="bg-white">

            <section
                className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url('https://scontent.faju14-1.fna.fbcdn.net/v/t39.30808-6/425706909_18283376221089849_5292852547166539092_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=j39ymT_oE7AQ7kNvgFUZAKd&_nc_ht=scontent.faju14-1.fna&oh=00_AYAxrydK2l2Ge5KEv6tf21CyCIXC701AfWUatJzC0RYejw&oe=66723478')`, // Substitua pelo caminho da sua imagem
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 bg-opacity-80 bg-black">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-wide leading-tight mt-24 text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                    >
                        Bem-vindo
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl mt-4 text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    >
                        Um carisma de Amor suscitado pelo Espírito Santo, a Comunidade
                        Católica Ágape foi criada para a evangelização e formação de jovens,
                        crianças e casais.
                    </motion.p>
                    <motion.button
                        onClick={scrollToInfo}
                        className="mt-8 bg-yellow-400 text-gray-800 py-2 px-4 sm:py-3 sm:px-6 rounded-full font-semibold uppercase tracking-wide hover:bg-yellow-500"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                    >
                        Entrar
                    </motion.button>
                </div>
            </section>


            <div id='infoSection' className="container mx-auto mt-12 px-4 flex flex-wrap lg:flex-nowrap">
                {/* Seção de Notícias */}
                <section className="w-full lg:w-3/4 px-4">
                    <div className="flex items-center mb-4">

                        <h2 className="text-lg font-bold py-2 px-4 bg-red-500 text-white rounded-lg shadow-md">
                            Notícias
                        </h2>

                    </div>
                    <hr className="border-t-2 border-gray-300 my-4" />


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {fakeNews.slice(0, newsLimit).map((news) => (
                            <Link key={news.id} to={`/Noticias/${news.id}`}>
                                <Card
                                    image={news.image}
                                    title={news.title}
                                    author={news.author}
                                    date={news.date}
                                    description={news.description}
                                    link={`/Noticias/${news.id}`}
                                />
                            </Link>
                        ))}
                    </div>
                    {!showMore && fakeNews.length > 6 && (
                        <div className="justify-center mt-4">
                            <button
                                onClick={handleShowMore}
                                className="px-4 py-2 bg-yellow-500 text-gray-800 rounded-full font-semibold uppercase tracking-wide hover:bg-yellow-600 transition duration-300"
                            >
                                Mostrar Mais
                            </button>
                        </div>
                    )}
                    {showMore && (
                        <div className="flex justify-center mt-8">
                            <Link to="/Noticias" className="text-blue-500 hover:underline">Ir para mais notícias</Link>
                        </div>
                    )}
                </section>

                {/* SEÇÃO SIDEBAR LATERAL */}
                <aside className="hidden lg:block w-full lg:w-1/4 px-4 mt-12 py-12 lg:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div className="mb-6">
                            <h2 className="text-lg font-bold text-gray-800 mb-4">Conecte-se e Contribua</h2>
                            <hr className="border-t border-gray-300 my-2" />
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                                </div>
                                <a href="https://www.yourcontactlink.com" className="text-blue-600 hover:underline">Contato</a>
                            </div>
                        </div>
                        <hr className="border-t border-gray-300 my-2" />
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <div className="bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">
                                    <FontAwesomeIcon icon={faYoutube} className="text-lg" />
                                </div>
                                <a href="https://www.youtube.com/user/agapecomunidade" className="text-red-500 hover:underline">Canal do Youtube</a>
                            </div>
                        </div>
                        <hr className="border-t border-gray-300 my-2" />
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <div className="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">
                                    <FontAwesomeIcon icon={faDonate} className="text-lg" />
                                </div>
                                <Link to="/Doacao" className="text-green-500 hover:underline">Faça uma doação</Link>
                            </div>
                        </div>
                    </div>
                </aside>

            </div>

            {/* Seção de Radio */}
            <RadioSection />

            <div className="container mx-auto mt-12 px-4 flex flex-wrap lg:flex-nowrap">
                {/* Seção de Formação */}
                <section className="w-full lg:w-3/4 px-4">
                    <div className="flex items-center mb-4">

                        <h2 className="text-lg font-bold py-2 px-4 bg-green-500 text-white rounded-lg shadow-md">
                            Formações
                        </h2>

                    </div>
                    <hr className="border-t-2 border-gray-300 my-4" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {formacao.slice(0, formacaoLimit).map((formacaoItem) => (
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
                    {!showMoreFormacao && formacao.length > 6 && (
                        <div className="justify-center mt-4">
                            <button
                                onClick={handleShowMoreFormacao}
                                className="px-4 py-2 bg-yellow-500 text-gray-800 rounded-full font-semibold uppercase tracking-wide hover:bg-yellow-600 transition duration-300"
                            >
                                Mostrar Mais
                            </button>
                        </div>
                    )}
                    {showMoreFormacao && (
                        <div className="flex justify-center mt-8">
                            <Link to="/formacao" className="text-blue-500 hover:underline">Ir para mais Formações</Link>
                        </div>
                    )}
                </section>
            </div>

            {/* Seção Lateral (Mobile) */}
            <aside className="lg:hidden container mx-auto mt-12 px-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">Conecte-se e Contribua</h2>
                        <hr className="border-t border-gray-300 my-2" />
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">
                                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                            </div>
                            <a href="https://www.yourcontactlink.com" className="text-blue-600 hover:underline">Contato</a>
                        </div>
                    </div>
                    <hr className="border-t border-gray-300 my-2" />
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <div className="bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">
                                <FontAwesomeIcon icon={faYoutube} className="text-lg" />
                            </div>
                            <a href="https://www.youtube.com/user/agapecomunidade" className="text-red-500 hover:underline">Canal do Youtube</a>
                        </div>
                    </div>
                    <hr className="border-t border-gray-300 my-2" />
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <div className="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">
                                <FontAwesomeIcon icon={faDonate} className="text-lg" />
                            </div>
                            <Link to="/Doacao" className="text-green-500 hover:underline">Faça uma doação</Link>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Seção de Vídeos e Comemorações */}
            <section className="bg-gradient-to-b from-blue-500 to-indigo-60000 mt-2 py-12">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Comemorando 20 Anos de Comunidade</h2>
                    <p className="text-lg mb-6 text-gray-600">
                        Acompanhe nossa jornada e celebre conosco este marco especial. Assista ao vídeo abaixo para saber mais sobre nossa história e conquistas.
                    </p>
                    <div className="flex justify-center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/CBAW7OtdREI?si=d5bo-GY3y6EDQFkX"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <div className="container mx-auto py-16 px-4 md:px-8">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-8 text-center">Cortes do Fundador</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videos.slice(0, videoLimit).map((video, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Link to={video.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-64 object-cover object-center"
                                />
                            </Link>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                                <p className="text-gray-700">{video.description}</p>
                            </div>
                        </div>
                    ))}
                    {videos.length > videoLimit && (
                        <div className=" justify-center mt-4">
                            <button
                                onClick={handleShowMoreVideos}
                                className="px-4 py-2 bg-yellow-500 text-gray-800 rounded-full font-semibold uppercase tracking-wide hover:bg-yellow-600 transition duration-300"
                            >
                                Carregar Mais
                            </button>
                        </div>
                    )}
                </div>
                <div className="flex justify-center mt-8">
                    <Link to="Formacao" className="text-blue-500 hover:underline">Outros Cortes e Conteúdos</Link>
                </div>
            </div>

        </div>
    );
}

export default Home;

