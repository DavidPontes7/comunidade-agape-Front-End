import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Liturgia {
  primeiraLeitura: string;
  segundaLeitura?: string;
  titulo: string;
  salmoResponsorial: string;
  corLiturgica: string;
  evangelho: string;
}

const LeituraDiaria: React.FC = () => {
  const [liturgia, setLiturgia] = useState<Liturgia | null>(null);
  const [mostrarPrimeiraLeitura, setMostrarPrimeiraLeitura] = useState(true);
  const [mostrarSegundaLeitura, setMostrarSegundaLeitura] = useState(false);
  const [mostrarSalmo, setMostrarSalmo] = useState(false);
  const [mostrarEvangelho, setMostrarEvangelho] = useState(false);

  useEffect(() => {
    const fetchLeituraDiaria = async () => {
      try {
        const response = await axios.get<Liturgia[]>('http://localhost:3333/liturgia');
        if (response.data && response.data.length > 0) {
          setLiturgia(response.data[0]); // Assumindo que a API retorna um único objeto Liturgia
        } else {
          console.error('Dados da liturgia não encontrados.');
        }
      } catch (error) {
        console.error('Erro ao buscar liturgia diária:', error);
      }
    };

    fetchLeituraDiaria();
  }, []);

  const handleMostrarPrimeiraLeitura = () => {
    setMostrarPrimeiraLeitura(true);
    setMostrarSegundaLeitura(false);
    setMostrarSalmo(false);
    setMostrarEvangelho(false);
  };

  const handleMostrarSegundaLeitura = () => {
    setMostrarPrimeiraLeitura(false);
    setMostrarSegundaLeitura(true);
    setMostrarSalmo(false);
    setMostrarEvangelho(false);
  };

  const handleMostrarSalmo = () => {
    setMostrarPrimeiraLeitura(false);
    setMostrarSegundaLeitura(false);
    setMostrarSalmo(true);
    setMostrarEvangelho(false);
  };

  const handleMostrarEvangelho = () => {
    setMostrarPrimeiraLeitura(false);
    setMostrarSegundaLeitura(false);
    setMostrarSalmo(false);
    setMostrarEvangelho(true);
  };

  return (
    <div className="container mx-auto p-6">
      
      <h1 className="text-3xl font-bold text-center mb-6">Liturgia Diária</h1>
      <div className="flex justify-center mt-4">
            <button className={`border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline ${mostrarPrimeiraLeitura ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleMostrarPrimeiraLeitura}
              disabled={mostrarPrimeiraLeitura}>
              Primeira Leitura
            </button>
            <button className={`border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline ${mostrarSegundaLeitura ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleMostrarSegundaLeitura}
              disabled={mostrarSegundaLeitura}>
              Segunda Leitura
            </button>
            <button className={`border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline ${mostrarSalmo ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleMostrarSalmo}
              disabled={mostrarSalmo}>
              Salmo Responsorial
            </button>
            <button className={`border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline ${mostrarEvangelho ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleMostrarEvangelho}
              disabled={mostrarEvangelho}>
              Evangelho
            </button>
          </div>
      {liturgia ? (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">{liturgia.titulo}</h2>
          {mostrarPrimeiraLeitura && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Primeira Leitura</h3>
              <p>{liturgia.primeiraLeitura}</p>
            </div>
          )}
          {mostrarSegundaLeitura && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Segunda Leitura</h3>
              <p>{liturgia.segundaLeitura}</p>
            </div>
          )}
          {mostrarSalmo && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Salmo Responsorial</h3>
              <p>{liturgia.salmoResponsorial}</p>
            </div>
          )}
          {mostrarEvangelho && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Evangelho</h3>
              <p>{liturgia.evangelho}</p>
            </div>
          )}
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Cor Litúrgica</h3>
            <p>{liturgia.corLiturgica}</p>
          </div>
        </div>
      ) : (
        <p className="text-lg text-center">Carregando liturgia diária...</p>
      )}
    </div>
  );
};

export default LeituraDiaria;
