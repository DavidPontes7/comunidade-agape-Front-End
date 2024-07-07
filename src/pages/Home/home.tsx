import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHandsHelping, faHeadphones, faHeart } from '@fortawesome/free-solid-svg-icons';

import Card from '../../componentes/cards/cards';
import LateralCards from './lateralCards';
import BemVindoSecao from './SlideHome';
import ConteudoGridAgape from './ConteudoGridAgape';
import { FaFacebook, FaFacebookF, FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';

const Home = () => {
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

    const [conteudos, setConteudos] = useState<Conteudo[]>([]);

    useEffect(() => {
        const fetchConteudo = async () => {
            try {
                const response = await axios.get('http://localhost:3333/conteudo');
                const conteudos = response.data.map((conteudo: any) => ({
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
                setConteudos(conteudos);
            } catch (error) {
                console.error("Houve um erro ao buscar os conteúdos", error);
            }
        };

        fetchConteudo();
    }, []);

    const [showMore, setShowMore] = useState(false);
    const [newsLimit, setNewsLimit] = useState(6);

    const handleShowMore = () => {
        setShowMore(true);
        setNewsLimit(prevLimit => prevLimit + 6);
    };

    const filteredConteudos = conteudos.filter(
        (conteudo) => conteudo.categoria.name
    );

    return (
        <div className="bg-white mx-auto">
            {/* Seção de Boas-vindas */}
            <BemVindoSecao />

            {/* Conteúdo Principal e Lateral */}
            <div className="container mx-auto lg:px-4 lg:mt-8" style={{ maxWidth: '1200px' }}>
                <ConteudoGridAgape />

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Conteúdo Principal */}
                    <div className="flex-1">
                        {/* Seção de Notícias */}
                        <section className="mt-6 lg:mt-24">
                            {filteredConteudos
                                .filter(conteudo => conteudo.categoria.name === "oracao")
                                .slice(0, 1)
                                .map((conteudo) => (


                                    <div key={conteudo.id} className="block">
                                        <img
                                            alt=""
                                            src={`http://localhost:3333/files/${conteudo.banner}`}
                                            className="h-64 w-full object-cover sm:h-80 lg:h-96"
                                        />
                                        <Link to={`/conteudo/${conteudo.id}`}>
                                            <h3 className="mt-4 text-lg font-bold text-gray-900 hover:text-red-700 sm:text-xl">{conteudo.titulo}</h3>
                                            <div
                                                className="line-clamp-2 overflow-hidden text-ellipsis"
                                                dangerouslySetInnerHTML={{ __html: conteudo.corpo }}
                                            />
                                        </Link>
                                    </div>

                                ))}


                            <div className="py-8">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2"></h2>
                                <span className="relative flex justify-center">
                                    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
                                    <span className="relative z-10 my-2 bg-stone-600 text-white font-bold px-6 py-2 rounded-full shadow-lg">
                                        Artigos e Notícias
                                    </span>

                                </span>

                                <div className="gap-4">
                                    {filteredConteudos.slice(0, showMore ? filteredConteudos.length : newsLimit)
                                        .filter(conteudo => conteudo.categoria.name != "acampamento" && conteudo.categoria.name != "eventos")
                                        .map((conteudo) => (
                                            <Card key={conteudo.id} conteudo={conteudo} />
                                        ))}

                                    {filteredConteudos
                                        .filter(conteudo => conteudo.categoria.name === "espiritualidade")
                                        .slice(0, 1)
                                        .map((conteudo) => (
                                            <Link to={`/conteudo/${conteudo.id}`} className="group relative block bg-black" key={conteudo.id}>
                                                <img
                                                    alt=""
                                                    src={`http://localhost:3333/files/${conteudo.banner}`}
                                                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                                />
                                                <div className="relative p-4 sm:p-6 lg:p-8">
                                                    <p className="text-sm font-medium uppercase tracking-widest text-red-600">{conteudo.categoria.name}</p>
                                                    <p className="text-xl font-bold text-white sm:text-2xl">{conteudo.autor}</p>
                                                    <div className="mt-32 sm:mt-48 lg:mt-64">
                                                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                                            <div
                                                                className="text-white line-clamp-2 overflow-hidden text-ellipsis"
                                                                dangerouslySetInnerHTML={{ __html: conteudo.corpo }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                </div>

                                {!showMore && conteudos.length > newsLimit && (
                                    <div className="flex justify-center mt-4">
                                        <button
                                            onClick={handleShowMore}
                                            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                                        >
                                            Mostrar Mais
                                        </button>
                                    </div>
                                )}

                                {showMore && (
                                    <div className="flex justify-center mt-8">
                                        <Link to="/noticias" className="text-blue-500 hover:underline">Mais Notícias e Artigos</Link>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* explore */}

                        <div className="container mx-auto px-4 py-8">

                            <div className="mb-8">
                                <span className="relative flex justify-center">
                                    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
                                    <span className="relative z-10 my-2 bg-stone-600 text-white font-bold px-6 py-2 rounded-full shadow-lg">
                                        Explore
                                    </span>

                                </span>
                                <iframe
                                    width="100%"
                                    height="400"
                                    src="https://www.youtube.com/embed/ZeOVn5QaaG8"
                                    title="Vídeo de Apresentação"
                                    frameBorder="0"
                                    allowFullScreen
                                    className="rounded-lg shadow-md"
                                ></iframe>

                            </div>
                            <div className='mx-auto'>
                                {filteredConteudos
                                    .filter(conteudo => conteudo.categoria.name.toLowerCase() === 'acampamento')
                                    .slice(0, 1)
                                    .map((conteudo) => (
                                        <Card key={conteudo.id} conteudo={conteudo} />
                                    ))}
                            </div>
                            <div className='mx-auto'>
                                {filteredConteudos
                                    .filter(conteudo => conteudo.categoria.name.toLowerCase() === 'eventos')
                                    .slice(0, 1)
                                    .map((conteudo) => (
                                        <Card key={conteudo.id} conteudo={conteudo} />
                                    ))}
                            </div>


                        </div>
                    </div>

                    {/* Lateral */}
                    <aside className="lg:w-1/3 lg:mt-24">
                        <LateralCards />

                        <div className="mt-8">
                            {/* Eventos especiais ou campanhas */}
                            <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Próximos Eventos</h3>
                                <p className="text-gray-700 mb-3">Participe dos nossos eventos especiais este mês.</p>
                                <a href="/eventos" className="text-blue-600 hover:underline">Ver Eventos</a>
                            </div>

                            {/* Redes Sociais */}
                            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 items-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center uppercase">Siga-nos</h3>
                                <div className="flex space-x-6 items-center justify-center">
                                    <a
                                        href="https://www.facebook.com/comunidadecatolicaagape"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 transition duration-300"
                                    >
                                        <FaFacebookSquare className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/comunidadecatolicaagape"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-600 hover:text-pink-800 transition duration-300"
                                    >
                                        <FaInstagram className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/comunidadecatolicaagape"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-600 hover:text-red-800 transition duration-300"
                                    >
                                        <FaYoutube className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                            {/* Seção de Chamada */}
                            <section className="mt-12 py-12 ">
                                <div className="container mx-auto px-4" style={{ maxWidth: '1200px' }}>
                                    <div className="flex items-center mb-6">

                                        <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold text-gray-800 mb-4">
                                            Conecte-se e Contribua
                                        </h2>
                                        <div className="flex-grow border-t-2 border-amber-500 ml-4" />
                                    </div>

                                    <div className="grid grid-cols-1  gap-6">
                                        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
                                            <FontAwesomeIcon icon={faYoutube} className="text-red-600 text-5xl mb-4" />
                                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Assista no YouTube</h3>
                                            <p className="text-gray-700 mb-4">Acompanhe nossos vídeos em nosso canal do YouTube.</p>
                                            <a
                                                href="https://www.youtube.com/@comunidadecatolicaagape7242"
                                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all duration-200"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Acesse o Canal
                                            </a>
                                        </div>

                                        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
                                            <FontAwesomeIcon icon={faHeart} className="text-green-600 text-5xl mb-4" />
                                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Contribua com Doações</h3>
                                            <p className="text-gray-700 mb-4">Ajude-nos a continuar nossa missão com sua doação</p>
                                            <Link
                                                to="/Doacao"
                                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-200"
                                            >
                                                Faça uma Doação
                                            </Link>
                                        </div>

                                        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
                                            <FontAwesomeIcon icon={faHeadphones} className="text-gray-600 text-5xl mb-4" />
                                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Participe da Nossa Rádio</h3>
                                            <p className="text-gray-700 mb-4">Ouça nossa programação ao vivo na Rádio Ágape</p>
                                            <Link
                                                to="/Radio"
                                                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-all duration-200"
                                            >
                                                Ouça Agora
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </aside>
                </div>
            </div>



        </div>
    );
};

export default Home;




