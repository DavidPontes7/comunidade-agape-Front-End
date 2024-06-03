import React, { useState, useEffect } from 'react';
import kids from '../../../img/agapingo.jpg';

const calculateTimeLeft = () => {
    const eventDate = new Date('2024-07-12T00:00:00');
    const difference = +eventDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
            Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutoss: Math.floor((difference / 1000 / 60) % 60),
            segundos: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;
};

const EventosPage: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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

    return (
        <div className="pai">
            {/* Seção de Introdução */}
            <section className="relative bg-gradient-to-b from-blue-500 to-indigo-600 text-white h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-5xl lg:text-7xl font-extrabold uppercase tracking-wide">Eventos</h1>
                    <p className="text-lg mt-4">Participe de nossos acampamentos e outras atividades emocionantes, onde você pode aprender, crescer e se divertir!</p>
                    <a href="#eventos" className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition duration-300">Veja Mais</a>
                </div>
            </section>

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

                {/* Seção de Acampamento */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <h2 className="px-3 py-1 text-lg font-bold bg-red-500 text-white rounded-lg shadow-md mr-4">ACAMPAMENTO</h2>
                            <hr className="flex-grow bg-gray-500 h-0.5 rounded-full" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <img src="caminho/para/imagem1.jpg" alt="Acampamento 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
                            </div>
                            <div>
                                <img src="caminho/para/imagem2.jpg" alt="Acampamento 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <a href="/acampamentos" className="text-blue-500 hover:underline">Ver Mais</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção de Congresso Kids */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center mb-4">
                    <h2 className="px-3 py-1 text-lg font-bold bg-pink-500 text-white rounded-lg shadow-md mr-4">CONGRESSO KIDS</h2>
                    <hr className="flex-grow bg-gray-500 h-0.5 rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <img src={kids} alt="Congresso Kids 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
                                <h3 className="mt-2 text-center text-lg font-medium text-gray-900">Congresso Kids 1</h3>
                            </div>
                            <div>
                                <img src="caminho/para/imagem_kids2.jpg" alt="Congresso Kids 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
                                <h3 className="mt-2 text-center text-lg font-medium text-gray-900">Congresso Kids 2</h3>
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <a href="/congresso-kids" className="text-pink-500 hover:underline text-xl">Ver Mais</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção de Arraia */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center mb-4">
                    <h2 className="px-3 py-1 text-lg font-bold bg-yellow-500 text-white rounded-lg shadow-md mr-4">ARRAIA</h2>
                    <hr className="flex-grow bg-gray-500 h-0.5 rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <img src="caminho/para/imagem_arraia1.jpg" alt="Arraia 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
                                <h3 className="mt-2 text-center text-lg font-medium text-gray-900">Arraia 1</h3>
                            </div>
                            <div>
                                <img src="caminho/para/imagem_arraia2.jpg" alt="Arraia 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
                                <h3 className="mt-2 text-center text-lg font-medium text-gray-900">Arraia 2</h3>
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <a href="/arraia" className="text-yellow-500 hover:underline text-xl">Ver Mais</a>
                        </div>
                    </div>
                </div>
            </div>


            {/* Seção de Próximos Eventos */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Eventos</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Próximos Eventos
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-6">
                            <div className="flex-shrink-0">
                                <svg className="h-12 w-12 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18C7.589 4 4 7.589 4 12s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm1 13h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                </svg>
                            </div>
                            <div className="ml-4 text-center">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Acampamento Jovem</h3>
                                <p className="mt-2 text-base leading-6 text-gray-500">Data: 12 de Julho, 2024</p>
                                <p className="mt-2 text-base leading-6 text-gray-500">Local: Chácara Àgape</p>
                                <div className="mt-4">
                                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">Inscreva-se</button>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg font-semibold text-gray-900">Contagem Regressiva:</p>
                                    <div className="text-2xl font-bold text-red-600">
                                        {timerComponents.length ? timerComponents : <span>Evento Expirado!</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Outros eventos */}
                    </div>
                </div>
            </section>

            {/* Seção de FAQ */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Perguntas Frequentes</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Dúvidas Comuns
                        </p>
                    </div>
                    <div className="mt-10">
                        {/* Exemplo de Pergunta e Resposta */}
                        <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-4">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Como faço para me inscrever nos eventos?</h3>
                            <p className="mt-2 text-base leading-6 text-gray-500">Você pode se inscrever através do nosso site clicando no botão "Inscreva-se" na seção de eventos.</p>
                        </div>
                        {/* Outras perguntas e respostas */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EventosPage;
