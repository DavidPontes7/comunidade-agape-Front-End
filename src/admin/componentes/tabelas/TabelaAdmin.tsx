import axios from "axios";
import React, { useState, useEffect } from "react";

import AdminModal from "../modal/AdminModal";

const ListarAdministradores: React.FC = () => {
   
    const [data, setData] = useState<{ id: string; name: string; email: string }[]>([]);

    const fetchAdmins = async () => {
        try {
            const token = sessionStorage.getItem('@AuthUser:token'); // Retrieve JWT token from sessionStorage
            if (!token) {
                throw new Error('Token não encontrado');
            }

            const response = await axios.get('http://localhost:3333/administradores', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`, // Send JWT token in Authorization header
                },
            });
            setData(response.data); 
        } catch (error) {
            console.error("Houve um erro ao buscar os administradores", error);
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchAdmins();
    }, []);
    return (
        <section className="py-1 bg-blueGray-50">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-blueGray-700">Administradores Cadastrados</h3>
                            </div>
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                
                                <button onClick={() => setIsModalOpen(true)} className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                    Cadastrar
                                </button>
                                <AdminModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                               
                            </div>
                        </div>
                    </div>

                    <div className="block w-full overflow-x-auto">
                        <table className="items-center bg-transparent w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        ID
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Name
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Email
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td className=" text-black border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                            {item.id}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {item.name}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {item.email}
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
