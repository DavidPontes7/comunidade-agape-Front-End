
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";



function Home() {

    const futureEvents = [
        { date: '10/05/2024', title: 'Evento A', month: 'Maio', image: 'https://via.placeholder.com/150' },
        { date: '15/05/2024', title: 'Evento B', month: 'Maio', image: 'https://via.placeholder.com/150' },
        { date: '20/05/2024', title: 'Evento C', month: 'Maio', image: 'https://via.placeholder.com/150' },
        { date: '10/06/2024', title: 'Evento D', month: 'Junho', image: 'https://via.placeholder.com/150' },
        { date: '15/06/2024', title: 'Evento E', month: 'Junho', image: 'https://via.placeholder.com/150' },
        { date: '20/06/2024', title: 'Evento F', month: 'Junho', image: 'https://via.placeholder.com/150' },

    ];
    const [activeMonth, setActiveMonth] = useState(null);

    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const filteredEvents = activeMonth ? futureEvents.filter((event) => event.month === activeMonth) : [];
    return (

        <div className="">

            <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-20 lg:px-8">
                <div className="bg-gradient-to-r px-6 py-16 sm:px-16 lg:px-24 lg:py-32 text-center">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">Bem-vindo à Comunidade Católica Ágape</h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-blacke leading-relaxed mb-8">Uma comunidade onde o amor, a fé e a serviço são os pilares fundamentais. Junte-se a nós e faça parte dessa jornada de devoção e amor ao próximo.</p>
                    <a href="#" className="text-lg sm:text-xl bg-yellow-400 text-blue-600 font-semibold py-3 px-10 rounded-full inline-block hover:bg-blue-600 hover:text-white transition duration-300">Saiba Mais</a>
                </div>
            </div>


            {/* Seção de notícias */}

            <section className="container mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4">Notícias Recentes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img src="https://via.placeholder.com/400" alt="Placeholder" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Título da Notícia</h3>
                            <p className="text-gray-700">Breve descrição da notícia. Pode conter algumas informações relevantes.</p>
                            <a href="#" className="text-blue-500 mt-2 inline-block">Leia Mais</a>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img src="https://via.placeholder.com/400" alt="Placeholder" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Título da Notícia</h3>
                            <p className="text-gray-700">Breve descrição da notícia. Pode conter algumas informações relevantes.</p>
                            <a href="#" className="text-blue-500 mt-2 inline-block">Leia Mais</a>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img src="https://via.placeholder.com/400" alt="Placeholder" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Título da Notícia</h3>
                            <p className="text-gray-700">Breve descrição da notícia. Pode conter algumas informações relevantes.</p>
                            <a href="#" className="text-blue-500 mt-2 inline-block">Leia Mais</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4">Formação</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img src="https://via.placeholder.com/400" alt="Placeholder" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Título da Notícia</h3>
                            <p className="text-gray-700">Breve descrição da notícia. Pode conter algumas informações relevantes.</p>
                            <a href="#" className="text-blue-500 mt-2 inline-block">Leia Mais</a>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img src="https://via.placeholder.com/400" alt="Placeholder" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Título da Notícia</h3>
                            <p className="text-gray-700">Breve descrição da notícia. Pode conter algumas informações relevantes.</p>
                            <a href="#" className="text-blue-500 mt-2 inline-block">Leia Mais</a>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img src="https://via.placeholder.com/400" alt="Placeholder" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Título da Notícia</h3>
                            <p className="text-gray-700">Breve descrição da notícia. Pode conter algumas informações relevantes.</p>
                            <a href="#" className="text-blue-500 mt-2 inline-block">Leia Mais</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* EVENTOSSS */}
            <div className="container mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4">Próximos Eventos</h2>
                <div className="flex overflow-x-auto mb-4">
                    {months.map((month, index) => (
                        <button
                            key={index}
                            className={`bg-white px-4 py-2 mr-4 rounded-md outline-none focus:outline-none text-base font-semibold ${activeMonth === month ? 'text-blue-500' : 'text-gray-700'
                                }`}
                            onClick={() => setActiveMonth(activeMonth === month ? null : month)}
                        >
                            {month}
                        </button>
                    ))}
                </div>
                <div className="flex overflow-x-auto mb-8">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event, index) => (
                            <div key={index} className="bg-white p-6 shadow-md rounded-md mr-4">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-40 h-40 object-cover rounded-md mb-4"
                                />
                                <p className="text-xl font-semibold text-gray-800 mb-2">{event.title}</p>
                                <p className="text-gray-500">{event.date}</p>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white p-6 shadow-md rounded-md mr-4">
                            <p className="text-lg font-semibold text-gray-800 mb-2">Nenhum evento para este mês</p>
                        </div>
                    )}
                </div>
            </div>


        </div>


    )

}

export default Home;
