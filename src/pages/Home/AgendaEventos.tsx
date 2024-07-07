import React, { useState } from 'react';

// Exemplo de dados de eventos (pode ser obtido de uma API)
const eventos = [
  { id: 1, titulo: 'Acamapento Jovens', data: '2024-07-15', imagem:'https://r2.padrepauloricardo.org/uploads/frase/image/286/Yousuf-Karsh-Pope-John-Paul-II.jpg'},
 
];

const AgendaEventos: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  // Função para filtrar eventos pelo mês selecionado
  const filteredEvents = eventos.filter(evento => {
    if (selectedMonth === null) {
      return true; // Mostra todos se nenhum mês selecionado
    }
    const eventoMonth = new Date(evento.data).getMonth();
    return eventoMonth === selectedMonth;
  });

  // Nomes dos meses
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="items-center">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-4">Agenda de Eventos</h2>
        <hr className="border-t-2 border-blue-300 my-4" />
      </div>

      {/* Botões de seleção de mês */}
      <div className="mb-4 overflow-x-auto whitespace-nowrap">
        {meses.map((mes, index) => (
          <button
            key={index}
            className={`inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-md focus:outline-none mr-2 mb-2 ${selectedMonth === index ? 'bg-indigo-500 text-white' : ''}`}
            onClick={() => setSelectedMonth(index)}
          >
            {mes}
          </button>
        ))}
        <button
          className={`inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-md focus:outline-none mr-2 mb-2 ${selectedMonth === null ? 'bg-indigo-500 text-white' : ''}`}
          onClick={() => setSelectedMonth(null)}
        >
          Todos
        </button>
      </div>

      {/* Lista de eventos */}
      <div className="flex flex-wrap justify-center gap-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(evento => (
            <div key={evento.id} className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
              <img
                className="w-full rounded-lg object-cover object-center"
                src={`http://localhost:3333/files/${evento.imagem}`}
                alt={evento.titulo}
              />
              <p className="my-4 pl-4 font-bold text-gray-500">{evento.titulo}</p>
              <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">Data: {new Date(evento.data).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Nenhum evento encontrado para este mês.</p>
        )}
      </div>
    </div>
  );
};

export default AgendaEventos;
