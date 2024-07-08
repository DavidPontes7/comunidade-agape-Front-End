import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Tabs from "@radix-ui/react-tabs";
import axios from 'axios';

const calculateTimeLeft = () => {
    const eventDate = new Date('2024-07-12T00:00:00');
    const difference = +eventDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
            Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
            Minutos: Math.floor((difference / 1000 / 60) % 60),
            Segundos: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;
};

const EventosPage: React.FC = () => {
    const [evento, setEvento] = useState<Evento[]>([]);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [showDetails, setShowDetails] = useState(false);
    const [selectedTab, setSelectedTab] = useState("Acampamentos");

    const tabItems = [
        "Acampamentos",
        "Setor Criança",
        "Arraia Àgape",
        "Outros Eventos",
    ];

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
                const response = await axios.get<[Evento]>('http://localhost:3333/evento');
                setEvento(response.data);
            } catch (error) {
                console.error('Houve erro ao buscar eventos', error);
            }
        };

        fetchEventos();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="bg-white mx-auto">
            {/* Seção de Introdução */}
            <span className="relative w-full mt-5  flex justify-center">
                <div className="absolute  w-full inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
                <span className="relative lg:text-lg  my-1 bg-stone-600 text-white font-bold px-6 py-2 rounded-full shadow-lg">
                    Eventos
                </span>
            </span>

            {/* Seção de Vídeo de Apresentação */}
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
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
            </div>

            {/* Tabs Component */}
            <Tabs.Root
                className="max-w-screen-xl mx-auto mt-4 px-4 md:px-8"
                value={selectedTab}
                onValueChange={(val) => setSelectedTab(val)}
                orientation="vertical"
            >
                <Tabs.List
                    className="hidden border-l flex-col justify-start items-start gap-y-3 text-sm sm:flex"
                    aria-label="Manage your account"
                >
                    {tabItems.map((item, idx) => (
                        <Tabs.Trigger
                            key={idx}
                            className={`group outline-none px-1.5 border-l-2 border-white text-gray-500 ${selectedTab === item ? 'border-gray-600 text-amber-600' : ''}`}
                            value={item}
                        >
                            <div className="py-1.5 px-3 rounded-lg duration-150 group-hover:text-amber-600 group-hover:bg-gray-100 font-medium">
                                {item}
                            </div>
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>

                <div className="relative text-gray-900 sm:hidden">
                    <p className="text-gray-700">Explore abaixo para ver mais opções:</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <select
                        value={selectedTab}
                        className="py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-indigo-600 text-sm"
                        onChange={(e) => setSelectedTab(e.target.value)}
                    >
                        {tabItems.map((item, idx) => (
                            <option key={idx} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Content based on selected tab */}
                {tabItems.map((item, idx) => (
                    <Tabs.Content key={idx} className="py-6" value={item}>
                        {item === "Acampamentos" && (
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {evento.map((evento) => (
                                    <CardEvento key={evento.id} evento={evento} />
                                ))}
                            </div>
                        )}

                        {item === "Setor Criança" && (
                            <p>Conteúdo para Setor Criança</p>
                        )}

                        {item === "Arraia Àgape" && (
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Arraiá Ágape</h2>
                                <p className="text-gray-700">O Arraiá Ágape é um evento festivo que celebra a cultura popular brasileira e a vivência comunitária entre os membros da Comunidade Católica Ágape. É um momento de alegria, música, dança e confraternização, onde todos são convidados a participar e se divertir em um ambiente familiar e acolhedor.</p>
                                <p className="text-gray-700">Venha se divertir conosco!</p>
                            </div>
                        )}

                        {item === "Outros Eventos" && (
                            <p>Conteúdo para Outros Eventos</p>
                        )}
                    </Tabs.Content>
                ))}
            </Tabs.Root>

            {/* Countdown Timer */}
            <div className="mt-8 px-4 sm:px-0">
                {timerComponents.length ? (
                    <div className="flex gap-x-2 text-amber-600">
                        <p className="font-bold">Tempo restante para o evento:</p>
                        {timerComponents.length ? timerComponents : <span>Evento Expirado!</span>}
                    </div>
                ) : <span>Carregando contagem regressiva...</span>}
            </div>

            {/* Botão Inscreva-se */}
            <div className="flex justify-center mt-8 mb-20">
                <Link to="/inscricao">
                    <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                        Inscreva-se
                    </button>
                </Link>
            </div>

            {/* Detalhes do Evento */}
            {showDetails && (
                <div className="container mx-auto px-4 py-8">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Detalhes do Evento</h2>
                        <p className="text-gray-700">Insira aqui os detalhes adicionais do evento.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const CardEvento: React.FC<{ evento: Evento }> = ({ evento }) => (
    <div className="rounded-lg bg-white shadow-md overflow-hidden">
        <img src={evento.banner} alt={evento.title} className="w-full h-40 object-cover object-center" />
        <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{evento.title}</h3>
            <p className="text-gray-700">{evento.description}</p>
            <p className="text-gray-600 mt-2">Data: {new Date(evento.date).toLocaleDateString('pt-BR')}</p>
        </div>
    </div>
);

export default EventosPage;
