import axios from "axios";
import React, { useState, useEffect } from "react";

const ListarInscricao: React.FC = () => {
    
    const [data, setData] = useState<{
        eventId: string;
        name: string;
        email: string;
        telefone: string;
        sector: string;
        group: string;
        title: string;
    }[]>([]);

    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedEvent, setSelectedEvent] = useState<string>("");

    const fetchInscricao = async () => {
        try {
            const token = sessionStorage.getItem('@AuthUser:token');
            if (!token) {
                throw new Error('Token não encontrado');
            }

            const response = await axios.get('http://localhost:3333/inscricao', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            });

            // Mapeando os dados recebidos para incluir o campo `title` do evento
            const inscricoes = response.data.map((inscricao: any) => ({
                eventId: inscricao.eventId,
                name: inscricao.name,
                email: inscricao.email,
                telefone: inscricao.telefone,
                sector: inscricao.sector,
                group: inscricao.group,
                title: inscricao.event.title, // Incluindo o campo `title` do evento
            }));

            setData(inscricoes);
        } catch (error) {
            console.error("Houve um erro ao buscar as inscrições", error);
        }
    };

    const openModal = (eventId: string) => {
        setSelectedEvent(eventId);
        setShowModal(true);
    };

    const handleDelete = async () => {
        try {
            // Implemente a lógica para excluir o evento com o ID `selectedEvent`
            // Aqui você pode usar axios.delete ou outra função para enviar a requisição de exclusão
            console.log(`Excluir evento com ID: ${selectedEvent}`);
            setShowModal(false); // Fechar o modal após a exclusão
        } catch (error) {
            console.error("Houve um erro ao excluir o evento", error);
        }
    };

    const handleCancel = () => {
        setShowModal(false); // Fechar o modal sem fazer nenhuma ação
    };

    useEffect(() => {
        fetchInscricao();
    }, []);

    return (
        <section className="py-1 bg-blueGray-50">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-blueGray-700">Inscrições</h3>
                            </div>
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                {/* <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                    Cadastrar
                                </button> */}
                            </div>
                        </div>
                    </div>

                    <div className="block w-full overflow-x-auto">
                        <table className="items-center bg-transparent w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        ID Evento
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        evento
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Name
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Email
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Telefone
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Grupo
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Setor
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Ações
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((user) => (
                                    <tr key={user.eventId}>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                            {user.eventId}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                            {user.title}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {user.name}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {user.email}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {user.telefone}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {user.group}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {user.sector}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className='flex  items-center mb-2 py-2'>
                                                <button
                                                    onClick={() => openModal(user.eventId)}
                                                    className="bg-red-500 text-white p-2 rounded mr-2" // Adiciona margem à direita para espaçamento entre os botões
                                                >
                                                    Excluir
                                                </button>

                                                <button
                                                    className="bg-green-500 text-white p-2 rounded" // Botão de editar sem margem extra
                                                >
                                                    Editar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg
                                        className="h-6 w-6 text-red-600"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.294 4.476C9.366 3.115 10.502 2.25 12 2.25c1.498 0 2.634.865 3.706 2.226 1.054 1.339 2.171 3.32 3.6 5.854l.436.772c1.182 2.094 2.115 3.749 2.606 5.077.501 1.357.62 2.59-.138 3.677-.736 1.055-1.963 1.487-3.511 1.691-1.541.204-3.614.204-6.273.204H11.575c-2.66 0-4.734 0-6.276-.204-1.548-.204-2.775-.636-3.511-1.691
`.757-1.087-.638-2.32-.137-3.677.491-1.328 1.423-2.983 2.606-5.077l.436-.772c1.429-2.534 2.546-4.515 3.6-5.854C10.366 3.115 11.502 2.25 12 2.25c.813 0 1.562.428 2.527 1.654z"
                                            fill="#ef4444"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 7.25a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0v-5a.75.75 0 01.75-.75zm0 7.75a1 1 0 100 2 1 1 0 000-2z"
                                            fill="#ef4444"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                        Excluir Inscrição
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Você tem certeza que deseja excluir esta inscrição? Esta ação não pode ser desfeita.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                onClick={handleDelete}
                                type="button"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Excluir
                            </button>
                            <button
                                onClick={handleCancel}
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ListarInscricao;
