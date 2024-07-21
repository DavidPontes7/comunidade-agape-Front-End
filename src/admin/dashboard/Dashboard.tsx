import React from 'react';
import AdminNavbar from '../componentes/navbar/navbar';
import ListarInscricao from '../componentes/tabelas/tabelaInscricao';
import ListarAdministradores from '../componentes/tabelas/TabelaAdmin';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Painel do Administrador</h2>
        
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Administradores</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ListarAdministradores />
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Inscrições</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ListarInscricao />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
