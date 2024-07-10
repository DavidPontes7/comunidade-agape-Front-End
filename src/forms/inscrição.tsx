import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

interface Category {
    id: string;
    title: string;
}

const EventosInscricaoForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [group, setGroup] = useState('');
    const [idade, setIdade] = useState<number | undefined>(undefined);
    const [sector, setSector] = useState('');
    const [eventId, setEventId] = useState('');
    const [events, setEvents] = useState<Category[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await api.get('/evento');
                setEvents(response.data);
            } catch (error) {
                console.error('Erro ao buscar eventos:', error);
                toast.error('Erro ao buscar eventos. Por favor, tente novamente.');
            }
        };

        fetchEvents();
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !email || !telefone || !eventId || idade === undefined) {
            toast.error('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('eventId', eventId);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('telefone', telefone);
            formData.append('sector', sector);
            formData.append('group', group);
            if (idade) {
                formData.append('idade', idade.toString());
            }

            const response = await api.post('/inscricao', formData);

            console.log('Resposta da inscrição:', response.data);
            toast.success('Sua inscrição foi realizada com sucesso!');
            setName('');
            setEmail('');
            setTelefone('');
            setGroup('');
            setIdade(undefined);
            setSector('');
            setEventId('');
        } catch (error) {
            console.error('Erro ao enviar inscrição:', error);
            toast.error('Houve um erro ao realizar sua inscrição. Por favor, tente novamente.');
        }
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input w-full"
                        placeholder="Digite seu nome completo"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="evento" className="block text-gray-700 text-sm font-bold mb-2">Selecione o Evento:</label>
                    <select
                        id="evento"
                        value={eventId}
                        onChange={(e) => setEventId(e.target.value)}
                        className="form-select w-full"
                        required
                    >
                        <option value="">Selecione um evento</option>
                        {events.map(event => (
                            <option key={event.id} value={event.id}>
                                {event.title}
                            </option>
                        ))}
                    </select>
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
                    <label htmlFor="grupo" className="block text-gray-700 text-sm font-bold mb-2">Qual grupo você participa?</label>
                    <input
                        type="text"
                        id="grupo"
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        className="form-input w-full"
                        placeholder="Digite o nome do seu grupo de oração (opcional)"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="setor" className="block text-gray-700 text-sm font-bold mb-2">Qual Setor você participa?</label>
                    <input
                        type="text"
                        id="setor"
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                        className="form-input w-full"
                        placeholder="Digite o nome do seu setor (opcional)"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="idade" className="block text-gray-700 text-sm font-bold mb-2">Idade:</label>
                    <input
                        type="number"
                        id="idade"
                        value={idade !== undefined ? idade : ''}
                        onChange={(e) => setIdade(Number(e.target.value))}
                        className="form-input w-full"
                        placeholder="Digite sua idade"
                        required
                    />
                </div>
                
            </form>
        </div>
    );
};

export default EventosInscricaoForm;
