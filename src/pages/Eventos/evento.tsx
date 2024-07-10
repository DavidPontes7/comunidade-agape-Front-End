import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Evento } from '../../types/interfaces';
import { api } from '../../services/api';

const baseUrl = import.meta.env.VITE_BASE_URL;

const EventosPage: React.FC = () => {
    const [eventos, setEventos] = useState<Evento[]>([]);

    interface Evento {
        id: string;
        title: string;
        description: string;
        date: string;
        banner: string;
    }

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const response = await api.get<[Evento]>('/evento');
                setEventos(response.data);
            } catch (error) {
                console.error('Houve erro ao buscar eventos', error);
            }
        };

        fetchEventos();
    }, []);

    return (
        <div className="bg-white mx-auto">
            {/* Seção de Introdução */}
            <span className="relative w-full mt-5 flex justify-center">
                <div className="absolute w-full inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
                <span className="relative lg:text-lg my-1 bg-stone-600 text-white font-bold px-6 py-2 rounded-full shadow-lg">
                    Acampamentos
                </span>
            </span>

            {/* Video de Introdução */}
            <div className="container mx-auto px-4 py-8">
                <iframe
                    src="https://www.youtube.com/embed/your-video-id"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 md:h-96 rounded-lg shadow-md"
                    title="Video de Introdução ao Acampamento"
                ></iframe>
            </div>

            {/* Seção de Informações sobre o Acampamento */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Sobre o Acampamento</h2>
                <p className="text-gray-700 mb-8">
                    O acampamento oferece uma experiência única de imersão espiritual, com atividades que promovem a união, o crescimento pessoal e a conexão com a natureza. Participe de momentos de oração, palestras, e atividades recreativas que fortalecem a fé e a amizade.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <img src={`${baseUrl}/images/acampamento1.jpg`} alt="Acampamento 1" className="rounded-lg shadow-md" />
                    <img src={`${baseUrl}/images/acampamento2.jpg`} alt="Acampamento 2" className="rounded-lg shadow-md" />
                    <img src={`${baseUrl}/images/acampamento3.jpg`} alt="Acampamento 3" className="rounded-lg shadow-md" />
                </div>
            </div>

            {/* Seção de Próximos Eventos */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Próximos Acampamentos</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {eventos.length === 0 ? (
                        <div className="text-center text-gray-600">Carregando eventos...</div>
                    ) : (
                        eventos.map((evento) => (
                            <CardEvento key={evento.id} evento={evento} />
                        ))
                    )}
                </div>
            </div>

            {/* Botão Inscreva-se */}
            <div className="flex justify-center mt-8 mb-20">
                <Link to="/inscricao">
                    <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                        Inscreva-se
                    </button>
                </Link>
            </div>

            {/* Seção de FAQ */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Perguntas Frequentes</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Quem pode participar do acampamento?</h3>
                    <p className="text-gray-700">O acampamento é aberto a todas as idades e todos são bem-vindos para participar.</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">O que devo levar para o acampamento?</h3>
                    <p className="text-gray-700">Recomendamos que você leve roupas confortáveis, itens de higiene pessoal, uma bíblia e muita disposição para participar das atividades.</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Como faço para me inscrever?</h3>
                    <p className="text-gray-700">Você pode se inscrever clicando no botão "Inscreva-se" acima e preenchendo o formulário de inscrição.</p>
                </div>
            </div>

            {/* Aviso de Construção */}
            <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white text-center py-2">
                Esta página está em construção.
            </div>
        </div>
    );
};

const CardEvento: React.FC<{ evento: Evento }> = ({ evento }) => (
    <div className="rounded-lg bg-white shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
        <img src={`${baseUrl}/files/${evento.banner}`} alt={evento.title} className="w-full h-40 object-cover object-center" />
        <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{evento.title}</h3>
            <p className="text-gray-700">{evento.description}</p>
            <p className="text-gray-600 mt-2">Data: {new Date(evento.date).toLocaleDateString('pt-BR')}</p>
        </div>
    </div>
);

export default EventosPage;
