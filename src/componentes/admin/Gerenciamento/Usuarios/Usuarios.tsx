import React, { useState, useEffect } from 'react';

const Usuarios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulação de dados de usuários (pode ser substituído por uma chamada à API real)
    const fetchUsers = async () => {
      try {
        // Aqui você faria uma chamada para obter a lista de usuários do seu backend
        // Exemplo simplificado de dados simulados
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        setUsers(data.users); // Atualiza o estado com os usuários recebidos
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []); // Executa apenas uma vez ao montar o componente

  const handleEditUser = (userId) => {
    // Lógica para redirecionar para a página de edição do usuário
    console.log(`Editar usuário com ID ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    // Lógica para excluir um usuário
    console.log(`Excluir usuário com ID ${userId}`);
    // Implemente a lógica para excluir o usuário no backend e atualizar a lista
    // Exemplo: fetch(`/api/users/${userId}`, { method: 'DELETE' })
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Usuários</h1>
      <p>Gerencie os usuários aqui:</p>

      <div className="mt-4">
        <h2 className="text-xl font-bold">Lista de Usuários</h2>
        <ul className="mt-2">
          {users.map((user) => (
            <li key={user.id} className="flex justify-between items-center bg-gray-100 p-3 rounded mb-2">
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <div>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  onClick={() => handleEditUser(user.id)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
          {users.length === 0 && <li>Nenhum usuário encontrado.</li>}
        </ul>
      </div>
    </div>
  );
};

export default Usuarios;
