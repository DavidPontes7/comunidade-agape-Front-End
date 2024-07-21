import React from 'react';


const RadioPlayer: React.FC = () => {
  const programacao = [
    {
      dia: 'Segunda-feira',
      horarios: ['09:00 - Programa da Manhã', '14:00 - Programa da Tarde'],
    },
    {
      dia: 'Terça-feira',
      horarios: ['10:00 - Entrevistas', '16:00 - Debate ao Vivo'],
    },
    {
      dia: 'Quarta-feira',
      horarios: ['11:00 - Palestra Especial', '15:00 - Música ao Vivo'],
    },
    {
      dia: 'Quinta-feira',
      horarios: ['10:00 - Bom Dia Ágape', '13:00 - Tarde de Fé', '15:00 - Sede Santos', '17:00 - Resenha de Boleiros', '18:00 - Mãe Amável', '19:00 - Santa Missa', '20:00 - Noite de Louvor'],
    },
    {
      dia: 'Sexta-feira',
      horarios: ['08:00 - Programa Inicial', '18:00 - Notícias do Dia'],
    },
    {
      dia: 'Sábado',
      horarios: ['12:00 - Programa de Sábado', '20:00 - Evento Especial'],
    },
    {
      dia: 'Domingo',
      horarios: ['10:00 - Celebração Matinal', '18:00 - Reflexões da Semana'],
    },
  ];

  // Função para obter o dia da semana atual
  const getDayOfWeek = () => {
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const today = new Date().getDay();
    return daysOfWeek[today];
  };

  const diaAtual = getDayOfWeek();
  const programacaoAtual = programacao.find(item => item.dia === diaAtual);

  return (
    <div className="bg-white">
      {/* Seção de Introdução */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Conheça a nossa missão</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Transmitindo o amor de Deus através das nossas transmissões ao vivo.
            </p>

          </div>
        </div>
      </section>

      <iframe
        src="https://p.stmip.net/Dr58668/xplay.html"
        frameBorder="0"
        width="100%"
        height="80"
        scrolling="no"
        allow="autoplay"
        className="rounded-lg shadow-md mb-8"
      ></iframe>

      {/* Container principal */}
      <div className="container mx-auto py-8 px-4">
        {/* Programação Atual */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Programação de Hoje - {diaAtual}</h3>
              <ul className="text-gray-700">
                {programacaoAtual && programacaoAtual.horarios.map((horario, index) => (
                  <li key={index} className="mb-2 border-b border-gray-200 pb-2">{horario}</li>
                ))}
                {!programacaoAtual && <li className="text-gray-500">Não há programação definida para hoje.</li>}
              </ul>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default RadioPlayer;
