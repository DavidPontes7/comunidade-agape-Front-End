// import { useState } from "react";
import Card from './cards/cards';  // Certifique-se de ajustar o caminho conforme necessário
import foto2 from '.././../img/anos20.jpg';
import fotosPapa from '.././../img/papa.png';
import logo from '../../img/logo.png'

function Home() {

    return (
        <div className="">

            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 text-white">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <img src={logo} alt="Logo da Comunidade Católica Ágape" className="h-3/4 object-contain animate__animated animate__bounceIn" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl lg:text-7xl font-extrabold uppercase tracking-wide text-yellow-300">Bem-vindo à nossa comunidade</h1>
                    <p className="text-lg mt-4 max-w-2xl mx-auto">
                        Um carisma de Amor suscitado pelo Espírito Santo, a Comunidade Católica Ágape foi criada para a evangelização e formação de jovens, crianças e casais.
                    </p>
                    <a href="/contato" className="mt-6 inline-block rounded-full bg-yellow-500 px-6 py-3 text-lg font-semibold text-gray-900 hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out">
                        Entre em contato
                    </a>
                </div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </section>


            <div className="container mx-auto mt-12  px-4 flex flex-wrap lg:flex-nowrap">
                {/* Seção de Notícias */}
                <section className="w-full lg:w-3/4 px-4">

                    <div className="flex items-center mb-4">
                        <h2 className="px-3 py-1 text-lg font-bold bg-red-500 text-white rounded-lg shadow-md mr-4">Notícias</h2>
                        <hr className="flex-grow bg-gray-500 h-0.5 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <Card
                            image="https://via.placeholder.com/400"
                            title="Título da Notícia"
                            author="Autor"
                            date="28 de Maio de 2024"
                            description="Breve descrição da notícia. Pode conter algumas informações relevantes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut fringilla enim..."
                            link="#"
                        />
                        <Card
                            image={fotosPapa}
                            title="Papa Francisco participa da Jornada Mundial das Crianças"
                            author="Autor"
                            date="20 de Maio de 2024"
                            description="Breve descrição da notícia. Pode conter algumas informações relevantes. Sed consequat est nec justo convallis dapibus. Vestibulum et elit ut libero..."
                            link="#"
                        />
                        <Card
                            image="https://via.placeholder.com/400"
                            title="Título da Notícia"
                            author="Autor"
                            date="15 de Maio de 2024"
                            description="Breve descrição da notícia. Pode conter algumas informações relevantes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut fringilla enim..."
                            link="#"
                        />
                    </div>
                </section>

                {/* Seção Lateral (Desktop) */}
                <aside className="hidden lg:block w-full lg:w-1/4 px-4 mt-12 lg:mt-0">
                    <div className="flex items-center mb-4">
                        <h2 className="px-3 py-1 text-lg font-bold bg-blue-600 text-white rounded-lg shadow-md mr-4">Conecte-se e Contribua</h2>
                        <hr className="flex-grow bg-gray-500 h-0.5 rounded-full" />
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-8 transition transform ">
                        <div className="p-4">
                            <h3 className="text-2xl font-bold mb-2">Rádio da Comunidade</h3>
                            <p className="text-gray-700 mb-4">Ouça a nossa rádio e fique por dentro de tudo que acontece na nossa comunidade. Programação ao vivo, músicas e muito mais.</p>
                            <div className="text-center">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300">Ouvir Rádio</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform ">
                        <div className="p-4">
                            <h3 className="text-2xl font-bold mb-2">Faça uma Doação</h3>
                            <p className="text-gray-700 mb-4">Ajude a nossa comunidade a crescer e a continuar com suas obras de evangelização e formação. Sua contribuição é muito importante para nós.</p>
                            <div className="text-center">
                                <button className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300">Doar Agora</button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <div className="  container mx-auto mt-12  px-4 flex flex-wrap lg:flex-nowrap">
                {/* Seção de Formação */}
                <section className="w-full lg:w-3/4 px-4">
                    <div className="flex items-center mb-4">
                        <h2 className="px-3 py-1 text-lg font-bold bg-yellow-500 text-white rounded-lg shadow-md mr-4">Formação</h2>
                        <hr className="flex-grow bg-gray-500 h-0.5 rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <Card
                            image={foto2}
                            title="Ágape: Vivendo um Carisma de Amor"
                            author="Autor"
                            date="10 de Maio de 2024"
                            description="Breve descrição da formação. Pode conter algumas informações relevantes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut fringilla enim..."
                            link="#"
                        />
                        <Card
                            image="https://via.placeholder.com/400"
                            title="Título da Formação"
                            author="Autor"
                            date="5 de Maio de 2024"
                            description
                            ="Breve descrição da formação. Pode conter algumas informações relevantes. Sed consequat est nec justo convallis dapibus. Vestibulum et elit ut libero..."
                            link="#"
                        />
                        <Card
                            image="https://via.placeholder.com/400"
                            title="Título da Formação"
                            author="Autor"
                            date="1 de Maio de 2024"
                            description="Breve descrição da formação. Pode conter algumas informações relevantes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut fringilla enim..."
                            link="#"
                        />
                    </div>
                </section>
            </div>

            {/* Seção Lateral (Mobile) */}
            <aside className="lg:hidden container mx-auto mt-12 px-4">
                <div className="flex items-center mb-4">
                    <h2 className="px-3 py-1 text-lg font-bold bg-blue-600 text-white rounded-lg shadow-md mr-4">Conecte-se e Contribua</h2>
                    <hr className="flex-grow bg-gray-500 h-0.5 rounded-full" />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-8 transition transform ">
                    <div className="p-4">
                        <h3 className="text-2xl font-bold mb-2">Rádio da Comunidade</h3>
                        <p className="text-gray-700 mb-4">Ouça a nossa rádio e fique por dentro de tudo que acontece na nossa comunidade. Programação ao vivo, músicas e muito mais.</p>
                        <div className="text-center">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300">Ouvir Rádio</button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform ">
                    <div className="p-4">
                        <h3 className="text-2xl font-bold mb-2">Faça uma Doação</h3>
                        <p className="text-gray-700 mb-4">Ajude a nossa comunidade a crescer e a continuar com suas obras de evangelização e formação. Sua contribuição é muito importante para nós.</p>
                        <div className="text-center">

                            <button className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300">Doar Agora</button>
                        </div>
                    </div>
                </div>
            </aside>

        </div>
    );
}

export default Home;
