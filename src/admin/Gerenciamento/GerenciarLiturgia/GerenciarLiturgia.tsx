import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Liturgia {
    primeiraLeitura: string;
    segundaLeitura?: string;
    salmoResponsorial: string;
    titulo: string;
    evangelho: string;
    corLiturgica: string;
}

const GerenciarLiturgia: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [primeiraLeitura, setPrimeiraLeitura] = useState('');
    const [segundaLeitura, setSegundaLeitura] = useState('');
    const [salmoResponsorial, setSalmoResponsorial] = useState('');
    const [evangelho, setEvangelho] = useState('');
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

            const formData = new FormData();
            formData.append('titulo', titulo);
            formData.append('primeiraLeitura', primeiraLeitura);
            formData.append('segundaLeitura', segundaLeitura);
            formData.append('salmoResponsorial', salmoResponsorial);
            formData.append('evangelho', evangelho);
            formData.append('corLiturgica', corLiturgica);

            await axios.post('http://localhost:3333/liturgia', formData, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                    'Content-Type': 'multipart/form-data',
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
            <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Publicar Leitura Litúrgica</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="titulo" className="block mb-2">
                            Título
                        </label>
                        <input
                            id="titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            className="block w-full p-2 border rounded"
                            placeholder="Digite o título"
                            type="text"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="primeiraLeitura" className="block mb-2">
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

                    <div className="mb-4">
                        <label htmlFor="segundaLeitura" className="block mb-2">
                            Segunda Leitura
                        </label>
                        <textarea
                            id="segundaLeitura"
                            value={segundaLeitura}
                            onChange={(e) => setSegundaLeitura(e.target.value)}
                            className="block w-full p-2 border rounded"
                            placeholder="Digite a segunda leitura"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="salmoResponsorial" className="block mb-2">
                            Salmo Responsorial
                        </label>
                        <textarea
                            id="salmoResponsorial"
                            value={salmoResponsorial}
                            onChange={(e) => setSalmoResponsorial(e.target.value)}
                            className="block w-full p-2 border rounded"
                            placeholder="Digite o salmo responsorial"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="evangelho" className="block mb-2">
                            Evangelho
                        </label>
                        <textarea
                            id="evangelho"
                            value={evangelho}
                            onChange={(e) => setEvangelho(e.target.value)}
                            className="block w-full p-2 border rounded"
                            placeholder="Digite o evangelho"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="corLiturgica" className="block mb-2">
                            Cor Litúrgica
                        </label>
                        <input
                            id="corLiturgica"
                            value={corLiturgica}
                            onChange={(e) => setCorLiturgica(e.target.value)}
                            className="block w-full p-2 border rounded"
                            placeholder="Digite a cor litúrgica"
                            type="text"
                            required
                        />
                    </div>

                    <button
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex justify-center items-center"
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
