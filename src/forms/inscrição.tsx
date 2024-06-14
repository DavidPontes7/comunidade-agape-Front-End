import React, { useState } from 'react';

const EventosInscricaoForm: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [grupoOracao, setGrupoOracao] = useState('');
    const [naoParticipaGrupo, setNaoParticipaGrupo] = useState(false);
    const [dataNascimento, setDataNascimento] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Dados do formulário:', { nome, email, telefone, grupoOracao, naoParticipaGrupo, dataNascimento });
        // Aqui você pode implementar a lógica para enviar os dados do formulário para o backend
        // Exemplo: fetch('/api/inscricao-evento', { method: 'POST', body: JSON.stringify({ nome, email, telefone, grupoOracao, naoParticipaGrupo, dataNascimento }) })
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center h-full min-h-screen">
            <form onSubmit={handleSubmit} className="max-w-md bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Formulário de Inscrição</h2>
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="form-input w-full"
                        placeholder="Digite seu nome completo"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input w-full"
                        placeholder="Digite seu e-mail"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="telefone" className="block text-gray-700 text-sm font-bold mb-2">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        className="form-input w-full"
                        placeholder="Digite seu telefone"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="grupoOracao" className="block text-gray-700 text-sm font-bold mb-2">Grupo/Setor</label>
                    <input
                        type="text"
                        id="grupoOracao"
                        value={grupoOracao}
                        onChange={(e) => setGrupoOracao(e.target.value)}
                        className="form-input w-full"
                        placeholder="Digite o nome do seu grupo de oração (opcional)"
                    />
                </div>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            checked={naoParticipaGrupo}
                            onChange={(e) => setNaoParticipaGrupo(e.target.checked)}
                        />
                        <span className="ml-2 text-gray-700">Não participo de nenhum grupo</span>
                    </label>
                </div>
                <div className="mb-4">
                    <label htmlFor="dataNascimento" className="block text-gray-700 text-sm font-bold mb-2">Data de Nascimento:</label>
                    <input
                        type="date"
                        id="dataNascimento"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        className="form-input w-full"
                        required
                    />
                </div>
                <div className="mt-6">
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
                    >
                        Inscrever-se
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventosInscricaoForm;
