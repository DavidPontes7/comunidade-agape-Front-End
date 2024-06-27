import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Tabs from "@radix-ui/react-tabs";

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

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [showDetails, setShowDetails] = useState(false);

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

    const [selectedTab, setSelectedTab] = useState("Acampamentos");
    const tabItems = [
        "Acampamentos",
        "Setor Criança",
        "Arraia Àgape",
        "Outros Eventos",
    ];


    return (
        <div className="pai">
            {/* Seção de Introdução */}
            <section className="relative bg-gradient-to-b from-blue-500 to-indigo-600 text-white h-96 flex items-center justify-center">

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-5xl lg:text-7xl font-extrabold uppercase tracking-wide">Eventos</h1>
                    <p className="text-lg mt-4">Participe de nossos acampamentos e outras atividades emocionantes, onde você pode aprender, crescer e se divertir!</p>
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

            </div>

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
                            className={`group outline-none px-1.5 border-l-2 border-white text-gray-500 ${selectedTab === item ? 'border-indigo-600 text-indigo-600' : ''}`}
                            value={item}
                        >
                            <div className="py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-100 font-medium">
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
                            <option key={idx} idx={idx}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                {tabItems.map((item, idx) => (
                    <Tabs.Content key={idx} className="py-6" value={item}>
                        {item === "Acampamentos" && (
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Acampamentos</h2>
                                <p className="text-gray-700">A base de um acampamento  é a adoração e a espiritualidade. Aqui, os participantes têm a oportunidade de se conectar com sua fé de maneiras profundas e significativas, por meio de celebrações litúrgicas, momentos de oração e adoração ao Santíssimo Sacramento. Estes momentos de comunhão espiritual são fundamentais para nutrir a alma e fortalecer a relação pessoal com Deus.</p>
                                <p className="text-gray-700"> As pregações e ensinamentos oferecidos nos acampamentos  são outro aspecto fundamental da experiência. Através de palestras inspiradoras, testemunhos de fé e discussões em grupo, os participantes são convidados a refletir sobre sua relação com Deus, aprofundar seu entendimento da doutrina católica e discernir o papel da fé em suas vidas diárias.</p>
                                <p className="text-gray-700">Mas talvez uma das partes mais preciosas dos acampamentos católicos seja a vivência da fraternidade cristã. Aqui, os participantes são acolhidos em uma comunidade de amor e respeito mútuo, onde são encorajados a compartilhar suas experiências, apoiar uns aos outros e crescer juntos na fé. Este espírito de fraternidade cria laços duradouros de amizade e solidariedade, que continuam a ressoar muito além dos dias passados no acampamento.</p>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900"> Explore o que aconteceu no evento!</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                            <img src="https://scontent.faju14-1.fna.fbcdn.net/v/t39.30808-6/439433564_18295432381089849_4177436260022728333_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Eou4Mayv0fEQ7kNvgGZCxTI&_nc_ht=scontent.faju14-1.fna&oh=00_AYB9uraY-glzaHf5TAq8d1pjpCSFWOQ17ES5EponOxS82w&oe=666F9326" alt="Acampamento 1" className="w-full h-64 object-cover" />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-900">Acampamento dos 20 anos</h3>
                                                <p className="mt-2 text-sm text-gray-600">Foram 3 dias nos retirando da cidade, para viver a paz que vem de Deus♥️</p>
                                            </div>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                            <img src="https://scontent.faju14-1.fna.fbcdn.net/v/t39.30808-6/361653308_662052329296793_5538695368607701547_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MKpcNb72x-gQ7kNvgGSO_sf&_nc_ht=scontent.faju14-1.fna&oh=00_AYAeoRz6lkUYkZZWlryvqDwMtuIYVSsn4wBSxYt9wKAI3g&oe=666F6692" alt="Acampamento 2" className="w-full h-64 object-cover" />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-900">Acampamento 30°</h3>
                                                <p className="mt-2 text-sm text-gray-600">É com grande alegria que finalizamos mais um Acampa, este , de número 30! 🎉
                                                    Somos gratos a Deus por tudo que nos fez até aqui!</p>
                                            </div>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                            <img src="https://scontent.faju14-1.fna.fbcdn.net/v/t39.30808-6/361642294_662052335963459_1060564028020592679_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D5xVe_7ucGsQ7kNvgEaUNTh&_nc_ht=scontent.faju14-1.fna&oh=00_AYD-He1TyxqMeJVyg2ISLcWNJY6QKZ09YXwbiDOJ2q50OQ&oe=666F8CA0" alt="Acampamento 3" className="w-full h-64 object-cover" />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-900">Acampamento 30°</h3>
                                                <p className="mt-2 text-sm text-gray-600">Missa no primeiro dia de acampamento</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {item === "Setor Criança" && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Setor Criança</h2>
                                <div className="text-gray-700">
                                    <p>
                                        No setor infantil da nossa comunidade, os tios organizam diversos eventos incríveis para as crianças, como Acampamento Kids, Congresso Kids e o Setor Criança realizado a cada 15 dias aos sábados. Nestes eventos, as crianças participam de brincadeiras animadas, ouvem histórias bíblicas para aprender e têm pregações adequadas para diferentes idades.
                                    </p>
                                    <p>
                                        Durante esses momentos especiais, as crianças têm a oportunidade de se conectar com a fé de maneira divertida e significativa. Elas aprendem sobre a mensagem da Bíblia através de histórias cativantes e atividades interativas, desenvolvendo assim seu entendimento da fé cristã desde cedo.
                                    </p>
                                    <p>
                                        É uma experiência gratificante estar junto delas, promovendo um crescimento espiritual e emocional enriquecedor.
                                    </p>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900"> Explore o que acontece no Setor Criança</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                        <img src="https://scontent.faju14-1.fna.fbcdn.net/v/t39.30808-6/299987283_3230554470517416_5384793924475128007_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bDCLQpJN7jEQ7kNvgHjeQjv&_nc_ht=scontent.faju14-1.fna&oh=00_AYCQAK9CVh5XcCy6n-imi0pB4x8r78TgdCE0VPEz-j0qIQ&oe=66723CAC" alt="Acampamento 1" className="w-full h-64 object-cover" />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-900"> Caminhada das crianças em homenagem a Nossa Senhora Imperatriz dos Campos😊</h3>
                                            <p className="mt-2 text-sm text-gray-600">Descrição da atividade 1...</p>
                                        </div>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                        <img src="https://scontent.faju14-1.fna.fbcdn.net/v/t39.30808-6/299802534_3230554477184082_9159078689472655417_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4bAN3DMp5ncQ7kNvgHq-wEC&_nc_ht=scontent.faju14-1.fna&oh=00_AYAX_PbkKYjrbP2AlAgZbDhOL8lnMggtXuxywrgU_YdG1g&oe=66722672" alt="Acampamento 2" className="w-full h-64 object-cover" />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-900"> Apresentação das crianças em homenagem a Nossa Senhora Imperatriz dos Campos😊</h3>
                                            <p className="mt-2 text-sm text-gray-600">Descrição da atividade 2...</p>
                                        </div>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                        <img src="https://scontent.faju14-1.fna.fbcdn.net/v/t39.30808-6/350678837_6598122850221696_781432641907643306_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KZbqbm21gt4Q7kNvgEzgAzu&_nc_ht=scontent.faju14-1.fna&oh=00_AYBmvmbkxDZRyNADRgsjMdcaVs0AIjJu0vrNFaoCg6DO7g&oe=66721673" alt="Acampamento 3" className="w-full h-64 object-cover" />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-900">Arraiazinho Ágape 2023😍</h3>
                                            <p className="mt-2 text-sm text-gray-600">Descrição da atividade 3...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {item === "Arraia Àgape" && (
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Arraiá Ágape</h2>
                                <p className="text-gray-700">O Arraiá Ágape é um evento festivo que celebra a cultura popular brasileira e a vivência comunitária entre os membros da Comunidade Católica Ágape. É um momento de alegria, música, dança e confraternização, onde todos são convidados a participar e se divertir em um ambiente familiar e acolhedor.</p>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Explore o que aconteceu no evento!</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                            <img src="https://scontent.faju14-1.fna.fbcdn.net/v/t39.30808-6/284973317_3178235952415935_795909509462081355_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aT_j73837fEQ7kNvgF7bWxb&_nc_ht=scontent.faju14-1.fna&oh=00_AYCZfZs7yMA8SwbzGwD9bzIafEdR1O2vfCenf1h8KiejaQ&oe=6672AA3F" alt="Arraiá Ágape 1" className="w-full h-64 object-cover" />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-900">Arraiá Ágape 2023</h3>
                                                <p className="mt-2 text-sm text-gray-600">Celebrando nossa cultura com música ao vivo, comidas típicas deliciosas e muita dança para animar a todos!</p>
                                            </div>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                            <img src="https://scontent.faju14-1.fna.fbcdn.net/v/t39.30808-6/289467768_3187922658113931_7045151330226788873_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1TJ80MFUth8Q7kNvgHF0PSu&_nc_ht=scontent.faju14-1.fna&oh=00_AYCfhHVjYei02jp3LBJECOoiZ5Id7ltfenStCwTEDiBWRA&oe=6672BC38" alt="Arraiá Ágape 2" className="w-full h-64 object-cover" />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-900">Arraiá Ágape 2022</h3>
                                                <p className="mt-2 text-sm text-gray-600">Momento de união e festividade, celebrando a cultura local.</p>
                                            </div>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                            <img src="https://scontent.faju14-1.fna.fbcdn.net/v/t39.30808-6/289481097_3187922674780596_8453870559690270331_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uF-ifUz3spQQ7kNvgF8DnT3&_nc_ht=scontent.faju14-1.fna&oh=00_AYD4aTYIIF5c_OLk1OpOXBEbHAsBGNdcswUMkwi0ZONnEA&oe=6672A624" alt="Arraiá Ágape 3" className="w-full h-64 object-cover" />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-900">Arraiá Ágape 2021</h3>
                                                <p className="mt-2 text-sm text-gray-600">Tradição e alegria em uma noite especial de festa comunitária.</p>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        )}
                        {item === "Outros Eventos" && (
                           <div>
                           <h2 className="text-lg font-bold text-gray-900">Outros Eventos</h2>
                           <p className="text-gray-700">Nossos eventos são momentos especiais de encontro, celebração e crescimento espiritual. Aqui, os participantes têm a oportunidade de vivenciar a presença de Deus de maneiras profundas e significativas.</p>
                           <div>
                               <h2 className="text-2xl font-bold text-gray-900">Explore o que aconteceu nos eventos!</h2>
                               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                   <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                       <img src="https://via.placeholder.com/400" alt="Evento 1" className="w-full h-64 object-cover" />
                                       <div className="p-4">
                                           <h3 className="text-lg font-semibold text-gray-900">Nome do Evento 1</h3>
                                           <p className="mt-2 text-sm text-gray-600">Descrição do Evento 1.</p>
                                       </div>
                                   </div>
                                   <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                       <img src="https://via.placeholder.com/400" alt="Evento 2" className="w-full h-64 object-cover" />
                                       <div className="p-4">
                                           <h3 className="text-lg font-semibold text-gray-900">Nome do Evento 2</h3>
                                           <p className="mt-2 text-sm text-gray-600">Descrição do Evento 2.</p>
                                       </div>
                                   </div>
                                   <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                       <img src="https://via.placeholder.com/400" alt="Evento 3" className="w-full h-64 object-cover" />
                                       <div className="p-4">
                                           <h3 className="text-lg font-semibold text-gray-900">Nome do Evento 3</h3>
                                           <p className="mt-2 text-sm text-gray-600">Descrição do Evento 3.</p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       
                        )}
                    </Tabs.Content>
                ))}
            </Tabs.Root>



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
                                    <Link to='/formulario'>
                                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">Inscreva-se</button>
                                    </Link>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg font-semibold text-gray-900">Contagem Regressiva:</p>
                                    <div className="text-2xl font-bold text-red-600">
                                        {timerComponents.length ? timerComponents : <span>Evento Expirado!</span>}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        onClick={toggleDetails}
                                        className="text-indigo-600 hover:underline"
                                    >
                                        {showDetails ? 'Esconder Detalhes' : 'Mostrar Detalhes'}
                                    </button>
                                    {showDetails && (
                                        <div className="mt-4 text-left">
                                            <p className="text-base leading-6 text-gray-500">Detalhes do evento:</p>
                                            <p className="text-base leading-6 text-gray-500">Este acampamento é destinado a jovens de todas as idades. Venha e aproveite um fim de semana cheio de atividades, aprendizado e diversão. Local: Chácara Àgape, uma bela propriedade rural com todas as comodidades necessárias para uma experiência inesquecível.</p>
                                        </div>
                                    )}
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
