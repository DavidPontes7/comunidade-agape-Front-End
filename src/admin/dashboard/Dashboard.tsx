import React from 'react';
import AdminNavbar from '../componentes/navbar/navbar';
import ListarInscricao from '../componentes/tabelas/tabelaInscricao';
import ListarAdministradores from '../componentes/tabelas/TabelaAdmin';


const AdminDashboard: React.FC = () => {
  return (
    <div className="mx-auto">
      <AdminNavbar />
      
      <ListarAdministradores />
      
      <ListarInscricao/>



    </div>

  );
};

export default AdminDashboard;
