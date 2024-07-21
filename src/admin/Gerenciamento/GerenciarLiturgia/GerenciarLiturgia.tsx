import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { api } from '../../../services/api';

interface Liturgia {
    primeiraLeitura: string;
    segundaLeitura?: string;
    salmoResponsorial: string;
    titulo: string;
    evangelho: string;
    corLiturgica: string;
    dia : Date;
}

const GerenciarLiturgia: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [primeiraLeitura, setPrimeiraLeitura] = useState('');
    const [segundaLeitura, setSegundaLeitura] = useState('');
    const [salmoResponsorial, setSalmoResponsorial] = useState('');
    const [evangelho, setEvangelho] = useState('');
    const [dia, setDia] = useState<Date | null>(null);
    const [corLiturgica, setCorLiturgica] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const token = sessionStorage.getItem('@AuthUser:token');
            if (!token) {
                throw new Error('Token não encontrado');
            }

            const liturgia: Liturgia = {
                titulo,
                primeiraLeitura,
                segundaLeitura,
                salmoResponsorial,
                evangelho,
                corLiturgica,
                dia: dia || new Date()
            };

            console.log('Enviando dados da liturgia:', liturgia);

            await api.post('/liturgia', liturgia, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                    'Content-Type': 'application/json',
                },
            });

            setTitulo('');
            setPrimeiraLeitura('');
            setSegundaLeitura('');
            setSalmoResponsorial('');
            setEvangelho('');
            setCorLiturgica('');
            setIsLoading(false);
            toast.success('Leitura litúrgica publicada com sucesso!');
        } catch (error) {
            setIsLoading(false);
            setError('Houve um erro ao publicar a leitura litúrgica. Por favor, tente novamente.');
            console.error('Erro ao publicar leitura litúrgica:', error);
        }
    };

    return (
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
            <div className="bg-white p-12 rounded shadow-md w-full max-w-3xl">
                <h2 className="text-3xl font-bold mb-8 text-center">Publicar Leitura Litúrgica</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-6 ">
                        <label htmlFor="titulo" className="block mb-2 text-lg font-medium">
                            Título
                        </label>
                        <ReactQuill
                            id="titulo"
                            value={titulo}
                            onChange={setTitulo}
                            className="block w-full p-2 border rounded"
                            placeholder="Digite o título"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="primeiraLeitura" className="block mb-2 text-lg font-medium">
                            Primeira Leitura
                        </label>
                        <ReactQuill
                            id="primeiraLeitura"
                            value={primeiraLeitura}
                            onChange={setPrimeiraLeitura}
                            className="block w-full p-2 border rounded"
                            placeholder="Digite a primeira leitura"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="segundaLeitura" className="block mb-2 text-lg font-medium">
                            Segunda Leitura
                        </label>
                        <ReactQuill
                            id="segundaLeitura"
                            value={segundaLeitura}
                            onChange={setSegundaLeitura}
                            className="block w-full p-2 border rounded"
                            placeholder="Digite a segunda leitura"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="salmoResponsorial" className="block mb-2 text-lg font-medium">
                            Salmo Responsorial
                        </label>
                        <ReactQuill
                            id="salmoResponsorial"
                            value={salmoResponsorial}
                            onChange={setSalmoResponsorial}
                            className="block w-full p-2 border rounded"
                            placeholder="Digite o salmo responsorial"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="evangelho" className="block mb-2 text-lg font-medium">
                            Evangelho
                        </label>
                        <ReactQuill
                            id="evangelho"
                            value={evangelho}
                            onChange={setEvangelho}
                            className="block w-full p-2 border rounded"
                            placeholder="Digite o evangelho"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="corLiturgica" className="block mb-2 text-lg font-medium">
                            Cor Litúrgica
                        </label>
                        <ReactQuill
                            id="corLiturgica"
                            value={corLiturgica}
                            onChange={setCorLiturgica}
                            className="block w-full p-2 border rounded"
                            placeholder="Digite a cor litúrgica"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="dia" className="block mb-2 text-lg font-medium">
                            Dia
                        </label>
                        <input
                            id="dia"
                            type="date" // Pode usar type="date" se for uma data simples
                            value={dia ? dia.toISOString().substr(0, 10) : ''} // Formatar para ISO 8601
                            onChange={(e) => setDia(new Date(e.target.value))}
                            className="block w-full p-2 border rounded"
                            placeholder="Selecione o dia"
                        />
                    </div>

                    <button
                        className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex justify-center items-center"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        ) : (
                            'Publicar'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GerenciarLiturgia;
