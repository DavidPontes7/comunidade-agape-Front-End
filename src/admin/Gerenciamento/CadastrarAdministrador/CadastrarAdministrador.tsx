import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CadastrarAdministrador: React.FC = () => {
    const [name, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        // Obter o token do sessionStorage
        const token = sessionStorage.getItem('@AuthUser:token');
        if (!token) {
            toast.error('Token de autenticação não encontrado.');
            return;
        }

        try {
            await axios.post(
                'http://localhost:3333/users',
                { name, email, password },
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`,
                    },
                }
            );

            toast.success('Administrador cadastrado com sucesso!', {
                onClose: () => navigate('/Dashboard'),
            });
        } catch (error) {
            toast.error('Erro ao cadastrar administrador.');
            console.error('Erro ao cadastrar administrador:', error);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Cadastrar Administrador</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Senha</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(e) => setUsername(e.target.value)}
                            className="p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Registrar Administrador
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CadastrarAdministrador;
