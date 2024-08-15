import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import AdminModal from "../componentes/modal/AdminModal";

// Componente ListarAdministradores
const ListarAdministradores: React.FC = () => {
  const [data, setData] = useState<{ id: string; name: string; email: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchAdmins = async () => {
    try {
      const token = sessionStorage.getItem('@AuthUser:token');
      if (!token) {
        throw new Error('Token não encontrado');
      }

      const response = await api.get('/administradores', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
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
                      <button className="bg-zinc-500 text-white px-3 py-1 rounded">
                        Desativar
                      </button>
                      <button className="bg-green-500 text-white px-3 py-1 rounded">
                        Gerenciar
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

// Componente ListarInscricao
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

      const response = await api.get('/inscricao', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });

      const inscricoes = response.data.map((inscricao: any) => ({
        eventId: inscricao.eventId,
        name: inscricao.name,
        email: inscricao.email,
        telefone: inscricao.telefone,
        sector: inscricao.sector,
        group: inscricao.group,
        title: inscricao.event.title,
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
      console.log(`Excluir evento com ID: ${selectedEvent}`);
      setShowModal(false);
    } catch (error) {
      console.error("Houve um erro ao excluir o evento", error);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetchInscricao();
  }, []);

  return (
    <section className="py-8 bg-blueGray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="font-semibold text-lg text-blueGray-700">Inscrições</h3>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-blueGray-50 text-blueGray-500 text-left text-xs uppercase font-semibold">
                    ID Evento
                  </th>
                  <th className="px-6 py-3 bg-blueGray-50 text-blueGray-500 text-left text-xs uppercase font-semibold">
                    Evento
                  </th>
                  <th className="px-6 py-3 bg-blueGray-50 text-blueGray-500 text-left text-xs uppercase font-semibold">
                    Nome
                  </th>
                  <th className="px-6 py-3 bg-blueGray-50 text-blueGray-500 text-left text-xs uppercase font-semibold">
                    Email
                  </th>
                  <th className="px-6 py-3 bg-blueGray-50 text-blueGray-500 text-left text-xs uppercase font-semibold">
                    Telefone
                  </th>
                  <th className="px-6 py-3 bg-blueGray-50 text-blueGray-500 text-left text-xs uppercase font-semibold">
                    Grupo
                  </th>
                  <th className="px-6 py-3 bg-blueGray-50 text-blueGray-500 text-left text-xs uppercase font-semibold">
                    Setor
                  </th>
                  <th className="px-6 py-3 bg-blueGray-50 text-blueGray-500 text-left text-xs uppercase font-semibold">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((inscricao) => (
                  <tr key={inscricao.eventId}>
                    <td className="px-6 py-4 text-sm text-blueGray-700">
                      {inscricao.eventId}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {inscricao.title}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {inscricao.name}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {inscricao.email}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {inscricao.telefone}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {inscricao.group}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {inscricao.sector}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => openModal(inscricao.eventId)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Excluir
                      </button>
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
          <div className="bg-white p-6 rounded shadow-lg">
            <h4 className="text-lg font-semibold mb-4">Confirmar Exclusão</h4>
            <p>Você tem certeza de que deseja excluir esta inscrição?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Componente AdminDashboard
const AdminDashboard: React.FC = () => {
  const [adminName, setAdminName] = useState<string>("");

  const fetchAdminName = async () => {
    try {
      const token = sessionStorage.getItem('@AuthUser:token');
      if (!token) {
        throw new Error('Token não encontrado');
      }

      const response = await api.get('/me', { // Supondo que há um endpoint para obter dados do administrador
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });

      setAdminName(response.data.name);
    } catch (error) {
      console.error("Houve um erro ao buscar o nome do administrador", error);
    }
  };

  useEffect(() => {
    fetchAdminName();
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 ml-64 p-4">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold text-blueGray-700">
            Bem-vindo, {adminName.charAt(0).toUpperCase() + adminName.slice(1)}
          </h1>
        </header>
        <main className="flex-grow">
          <ListarAdministradores />
          <ListarInscricao />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
