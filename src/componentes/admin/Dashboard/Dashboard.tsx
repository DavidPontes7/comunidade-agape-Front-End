import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Notícias</h2>
          <p>Gerenciar notícias</p>
          <Link to="/admin/noticias" className="text-blue-500 hover:underline">Ver todas as notícias</Link>
          <Link to="/admin/noticias/nova" className="text-blue-500 hover:underline">Adicionar nova notícia</Link>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Formações</h2>
          <p>Gerenciar formações</p>
          <Link to="/admin/formacoes" className="text-blue-500 hover:underline">Ver todas as formações</Link>
          <Link to="/admin/formacoes/nova" className="text-blue-500 hover:underline">Adicionar nova formação</Link>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Usuários</h2>
          <p>Gerenciar usuários</p>
          <Link to="/admin/usuarios" className="text-blue-500 hover:underline">Ver todos os usuários</Link>
          <Link to="/admin/usuarios/novo" className="text-blue-500 hover:underline">Adicionar novo usuário</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
