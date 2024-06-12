import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../componentes/cards/cards';  // Certifique-se de ajustar o caminho conforme necessário
import 'animate.css';
import { fakeNews } from '../../data/Noticia-Item/NoticiaData'; 
import { motion } from "framer-motion";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBroadcastTower, FaHandHoldingUsd } from 'react-icons/fa'
import { formacao } from '../../data/Formacao-Item/FormacaoData'; 
import { videos } from '../../data/Videos-item/VideosData';

const YouTubeLink = ({ channelName, link }: any) => (
    <Link to={link} className="flex items-center justify-center bg-red-500 text-white px-4 py-2 m-5 rounded-md hover:bg-red-600 transition duration-300">
        <FontAwesomeIcon icon={faYoutube} className="w-5 h-5 mr-2" />
        {channelName}
    </Link>
);

const scrollToInfo = () => {
    const infoSection = document.getElementById('infoSection');
    if (infoSection) {
        infoSection.scrollIntoView({ behavior: 'smooth' });
    }
};

const Home: React.FC = () => {
    // Noticias
    const [showMore, setShowMore] = useState(false);
    const [newsLimit, setNewsLimit] = useState(6);
    const handleShowMore = () => {
        setShowMore(true);
        setNewsLimit(fakeNews.length);
    };
    // Formação
    const [showMoreFormacao, setShowMoreFormacao] = useState(false);
    const [formacaoLimit, setFormacaoLimit] = useState(6);

    const handleShowMoreFormacao = () => {
        setShowMoreFormacao(true);
        setFormacaoLimit(formacao.length);
    };

    // Videos
    const [showVideo, setShowVideo] = useState(false);
    const [videoLimit, setVideoLimit] = useState(3);
    const handleShowMoreVideos = () => {
        setShowVideo(true);
        setVideoLimit(videos.length);
    }


    return (
        <div className="bg-white">

            {/* Banner de introdução */}
            <section
                className="relative text-white h-screen flex flex-col items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('https://scontent.faju14-1.fna.fbcdn.net/v/t39.30808-6/425706909_18283376221089849_5292852547166539092_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Oz4LGdSjRcAQ7kNvgHJ012f&_nc_ht=scontent.faju14-1.fna&oh=00_AYA7LAZlbSkeNGMa8LEVY8c_FO3i4j0hTYkHMP1VfO_nNg&oe=666E3FF8')",
                    backgroundPosition: "center center",
                }}
            >
                <div className="absolute inset-0 bg-opacity-75 bg-black"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 ">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-wide leading-tight mt-24"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                    >
                        Bem-vindo
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl mt-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    >
                        Um carisma de Amor suscitado pelo Espírito Santo, a Comunidade
                        Católica Ágape foi Criada para a Evangelização e formação de jovens,
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
                <div className="absolute inset-x-0 bottom-0 z-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        className="fill-current  text-white"
                    >
                        <path
                            fillOpacity="1"
                            d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,170.7C672,181,768,203,864,197.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </section>

            <div id='infoSection' className="container mx-auto mt-1  px-4 flex flex-wrap lg:flex-nowrap">
                {/* Seção de Notícias */}
                <section className="w-full lg:w-3/4 px-4">
                    <div className="flex items-center mb-4">
                        <h2 className="px-3 py-1 text-lg font-bold bg-red-500 text-white rounded-lg shadow-md mr-4">Notícias</h2>
                        <hr className="flex-grow bg-gray-500 h-0.5 rounded-full" />
                    </div>
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
                        <div className="justify-center mt-8">
                            <button
                                onClick={handleShowMore}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
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

                {/* Seção Lateral (Desktop) */}
                <aside className="hidden lg:block w-full lg:w-1/4 px-4 mt-12 lg:mt-0">
                    <div className="flex items-center mb-4">
                        <h2 className="px-3 py-1 text-lg font-bold bg-blue-600 text-white rounded-lg shadow-md mr-4">
                            Conecte-se e Contribua
                        </h2>
                        <hr className="flex-grow bg-gray-500 h-0.5 rounded-full" />
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-8 transition transform hover:scale-105 hover:shadow-xl">
                        <div className="p-4">
                            <h3 className="text-2xl font-bold mb-2 flex items-center">
                                <FaBroadcastTower className="mr-2 text-blue-500" /> Rádio da Comunidade
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Ouça a nossa rádio e fique por dentro de tudo que acontece na nossa comunidade. Programação ao vivo, músicas e muito mais.
                            </p>
                            <div className="text-center">
                                <Link to="/radio" className="inline-block">
                                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition duration-300 shadow-md flex items-center justify-center">
                                        <FaBroadcastTower className="mr-2" /> Ouça a Rádio
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-xl">
                        <div className="p-4">
                            <h3 className="text-2xl font-bold mb-2 flex items-center">
                                <FaHandHoldingUsd className="mr-2 text-green-500" /> Faça uma Doação
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Ajude a nossa comunidade a crescer e a continuar com suas obras de evangelização e formação. Sua contribuição é muito importante para nós.
                            </p>
                            <div className="text-center">
                                <Link to="/doacao" className="inline-block">
                                    <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-green-600 hover:to-teal-700 transition duration-300 shadow-md flex items-center justify-center">
                                        <FaHandHoldingUsd className="mr-2" /> Doar Agora
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <div className="  container mx-auto mt-12  px-4 flex flex-wrap lg:flex-nowrap">
                {/* Seção de Formação */}
                <section className="container mx-auto mt-12 px-4 flex flex-wrap lg:flex-nowrap">
                    <section className="w-full lg:w-3/4 px-4">
                        <div className="flex items-center mb-4">
                            <h2 className="px-3 py-1 text-lg font-bold bg-yellow-500 text-white rounded-lg shadow-md mr-4">Formação</h2>
                            <hr className="flex-grow bg-gray-500 h-0.5 rounded-full" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {formacao.slice(0, formacaoLimit).map((formacaoItem) => (
                                <Card
                                    key={formacaoItem.id}
                                    image={formacaoItem.image}
                                    title={formacaoItem.title}
                                    author={formacaoItem.author}
                                    date={formacaoItem.date}
                                    description={formacaoItem.description}
                                    link={formacaoItem.link}
                                />
                            ))}
                        </div>
                        {!showMoreFormacao && formacao.length > 6 && (
                            <div className=" justify-center mt-8">
                                <button
                                    onClick={handleShowMoreFormacao}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
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
                </section>


            </div>

            {/* Seção Lateral (Mobile) */}
            <aside className="lg:hidden container mx-auto mt-12 px-4">
                <div className="flex items-center mb-4">
                    <h2 className="px-3 py-1 text-lg font-bold bg-blue-600 text-white rounded-lg shadow-md mr-4">Conecte-se e Contribua</h2>
                    <hr className="flex-grow bg-gray-500 h-0.5 rounded-full" />
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-8 transition transform">
                    <div className="p-4">
                        <h3 className="text-2xl font-bold mb-2 flex items-center">
                            <FaBroadcastTower className="mr-2 text-blue-500" /> Rádio da Comunidade
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Ouça a nossa rádio e fique por dentro de tudo que acontece na nossa comunidade. Programação ao vivo, músicas e muito mais.
                        </p>
                        <div className="text-center">
                            <Link to="/radio" className="inline-block">
                                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition duration-300 shadow-md flex items-center justify-center">
                                    <FaBroadcastTower className="mr-2" /> Ouça a Rádio
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform ">
                    <div className="p-4">
                        <h3 className="text-2xl font-bold mb-2 flex items-center">
                            <FaHandHoldingUsd className="mr-2 text-green-500" /> Faça uma Doação
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Ajude a nossa comunidade a crescer e a continuar com suas obras de evangelização e formação. Sua contribuição é muito importante para nós.
                        </p>
                        <div className="text-center">
                            <Link to="/doacao" className="inline-block">
                                <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-green-600 hover:to-teal-700 transition duration-300 shadow-md flex items-center justify-center">
                                    <FaHandHoldingUsd className="mr-2" /> Doar Agora
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>

            {/* /////////////Seção Lateral///////////////
            /////////////////////////////////// */}



            <div className="container mx-auto py-16 px-4 md:px-8">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-8 text-center">Cortes do Fundador</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videos.slice(0, videoLimit).map((video, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Link to={video.link} target="_blank" rel="noopener noreferrer">
                                <img src={video.thumbnail} alt={video.title} className="w-full h-auto" />
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
                                className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                            >
                                Carregar Mais
                            </button>
                        </div>
                    )}            
                </div>
                
            </div>
            {/* <YouTubeLink channelName="Para Mais Contéudos" link="https://www.youtube.com/@comunidadecatolicaagape7242" target="_blank" /> */}

            {/* ///////Fim Da Home ////// */}
        </div>

    );
}

export default Home;
