// src/pages/AdminDashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">Aréa do Administrador</h1>
      </header>
      <main className="flex flex-1">
        <nav className="w-64 bg-gray-200 p-4">
          <ul>
            <li className="mb-4">
              <Link to="/admin/Usuarios" className="text-blue-500">Gerenciar Úsuarios</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/Formacao" className="text-blue-500">Gerenciar Formações</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/Noticia" className="text-blue-500">Gerenciar Notícias</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/Inscricoes" className="text-blue-500">Gerenciar Inscrições</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/Configuracoes" className="text-blue-500">Configuraçoes</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/Configuracoes" className="text-blue-500">Sair</Link>
            </li>
          </ul>
        </nav>
        <section className="flex-1 p-6">
          {/* Conteúdo do painel */}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
