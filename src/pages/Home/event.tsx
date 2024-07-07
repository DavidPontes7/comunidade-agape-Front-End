import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const NextEventTimer = () => {
    // Aqui você deve implementar a lógica para calcular o tempo restante para o próximo evento
    const timeTillEvent = new Date('2024-07-12T00:00:00Z'); // Exemplo de data e hora do próximo evento

    // Função para calcular o tempo restante em segundos
    const calculateTimeLeft = () => {
        const difference = timeTillEvent - new Date();
        return Math.max(0, Math.floor(difference / 1000));
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Próximos Eventos</h3>
            <p className="text-gray-700 mb-3">Participe dos nossos eventos especiais este mês.</p>

            {/* Temporizador usando CountdownCircleTimer */}
            <div className="flex justify-center">
                <CountdownCircleTimer
                    isPlaying
                    duration={calculateTimeLeft()} // Duração do temporizador em segundos
                    colors={[['#7E2E84']]} // Cores do círculo do temporizador
                    size={120} // Tamanho do temporizador
                >
                    {({ remainingTime }) => (
                        <div className="text-2xl font-bold">
                            {remainingTime > 0 ? `Tempo restante: ${remainingTime}s` : 'Evento em andamento'}
                        </div>
                    )}
                </CountdownCircleTimer>
            </div>

            <a href="/eventos" className="text-blue-600 hover:underline mt-3 block text-center">
                Ver Todos os Eventos
            </a>
        </div>
    );
};

export default NextEventTimer;
