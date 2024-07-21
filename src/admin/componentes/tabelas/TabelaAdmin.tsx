import React, { useState, useEffect } from "react";
import AdminModal from "../modal/AdminModal";
import { api } from "../../../services/api";

const ListarAdministradores: React.FC = () => {
    const [data, setData] = useState<{ id: string; name: string; email: string }[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchAdmins = async () => {
        try {
            const token = sessionStorage.getItem('@AuthUser:token'); // Retrieve JWT token from sessionStorage
            if (!token) {
                throw new Error('Token não encontrado');
            }

            const response = await api.get('/administradores', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`, // Send JWT token in Authorization header
                },
            });
            setData(response.data);
        } catch (error) {
            console.error("Houve um erro ao buscar os administradores", error);
        }
    };

    useEffect(() => {
        fetchAdmins();
    }, []);

    return (
        <section className="py-8 bg-blueGray-50">
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-semibold text-lg text-blueGray-700">Administradores Cadastrados</h3>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-blue-600 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                            Cadastrar
                        </button>
                        <AdminModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    </div>
                    <div className="p-4 overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 bg-blueGray-50 text-blueGray-500 text-left text-xs uppercase font-semibold">
                                        ID
                                    </th>
                                    <th className="px-6 py-3 bg-blueGray-50 text-blueGray-500 text-left text-xs uppercase font-semibold">
                                        Nome
                                    </th>
                                    <th className="px-6 py-3 bg-blueGray-50 text-blueGray-500 text-left text-xs uppercase font-semibold">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 bg-blueGray-50 text-blueGray-500 text-left text-xs uppercase font-semibold">
                                        Ações
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id} className="border-t border-gray-200">
                                        <td className="px-6 py-4 text-sm text-blueGray-700">
                                            {item.id}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {item.email}
                                        </td>
                                        <td className="px-6 py-4 text-sm flex space-x-2">
                                            <button className="bg-red-500 text-white px-3 py-1 rounded">
                                                Excluir
                                            </button>
                                            <button className="bg-green-500 text-white px-3 py-1 rounded">
                                                Editar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListarAdministradores;
