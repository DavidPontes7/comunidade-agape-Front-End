import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';
import { getLeituraDiaria } from '../../services/liturgia-services/leiturasService';
import { getSantoDoDia } from '../../services/santos-services/santosService';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

registerLocale('pt-BR', ptBR);

const LeituraDiaria: React.FC = () => {
  const [dataAtual, setDataAtual] = useState<Date>(new Date());
  const [leitura, setLeitura] = useState<any>(null);
  const [santo, setSanto] = useState<any>(null);
  const [currentReading, setCurrentReading] = useState<string>('primeiraLeitura');
  const [liturgicalColorBackground, setLiturgicalColorBackground] = useState<string>('');

  useEffect(() => {
    const fetchLeituraDiaria = async () => {
      const leituraDiaria = await getLeituraDiaria(formatDate(dataAtual));
      setLeitura(leituraDiaria);

      switch (leituraDiaria?.corLiturgica) {
        case 'verde':
          setLiturgicalColorBackground('#4CAF50');
          break;
        case 'roxo':
          setLiturgicalColorBackground('#9C27B0');
          break;
        case 'vermelho':
          setLiturgicalColorBackground('#F44336');
          break;
        case 'branco':
          setLiturgicalColorBackground('#8C7853');
          break;
        default:
          setLiturgicalColorBackground('#4CAF50'); // Cor padrão
          break;
      }
    };

    const fetchSantoDoDia = async () => {
      const formattedDate = formatDateToCommemorative(dataAtual);
      const santoDoDia = await getSantoDoDia(formattedDate);
      setSanto(santoDoDia);
    };

    fetchLeituraDiaria();
    fetchSantoDoDia();
  }, [dataAtual]);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatDateToCommemorative = (date: Date): string => {
    const day = String(date.getDate()).padStart(1, '0');
    const month = date.toLocaleString('pt-BR', { month: 'long' });
    return `${day} de ${month}`;
  };

  const handleReadingChange = (reading: string) => {
    setCurrentReading(reading);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="font-sans text-center text-4xl font-bold text-gray-800 mb-8 mt-12" style={{ color: leitura && liturgicalColorBackground }}>
        Liturgia Diária
      </h1>
      <div className="rounded-lg shadow-lg p-6 mb-8 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faBookmark} style={{ color: leitura && liturgicalColorBackground, fontSize: '24px', marginRight: '8px' }} />
            <h3 style={{ color: liturgicalColorBackground, fontSize: '19px', fontWeight: 'bold' }}>Cor Litúrgica:</h3>
            <span className="align-items-center text-base ml-1" style={{ color: leitura && liturgicalColorBackground, fontSize: '19px', fontWeight: 'bold' }}>{leitura && leitura.corLiturgica}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">{leitura && leitura.titulo}</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => handleReadingChange('primeiraLeitura')}
            className={`py-2 px-4 rounded font-bold text-white transition bg-gray-600 hover:bg-yellow-300 ${currentReading === 'primeiraLeitura' ? 'hover:bg-yellow-300' : ''}`}
          >
            1° Leitura
          </button>
          <button
            onClick={() => handleReadingChange('salmoResponsorial')}
            className={`py-2 px-4 rounded font-bold text-white transition bg-gray-600 hover:bg-yellow-300 ${currentReading === 'salmoResponsorial' ? 'hover:bg-yellow-300' : ''}`}
          >
            Salmo
          </button>
          {leitura?.segundaLeitura && (
            <button
              onClick={() => handleReadingChange('segundaLeitura')}
              className={`py-2 px-4 rounded font-bold text-white transition bg-gray-600 hover:bg-yellow-300 ${currentReading === 'segundaLeitura' ? 'hover:bg-yellow-300' : ''}`}
            >
              2° Leitura
            </button>
          )}
          <button
            onClick={() => handleReadingChange('evangelho')}
            className={`py-2 px-4 rounded font-bold text-white transition bg-gray-600 hover:bg-yellow-300 ${currentReading === 'evangelho' ? 'hover:bg-yellow-300' : ''}`}
          >
            Evangelho
          </button>
        </div>

        <div className="md:flex md:space-x-6 justify-center items-center">
          <div className="calendar-container mb-8 md:mb-0 md:order-2 md:flex-shrink-0 text-center md:text-left mx-auto md:mx-0">
            <DatePicker
              selected={dataAtual}
              onChange={(date: Date) => setDataAtual(date)}
              className="bg-white border-2 border-blue-400 rounded p-2 text-center w-full"
              dateFormat="yyyy-MM-dd"
              locale="pt-BR"
              inline
            />
          </div>

          <div className="flex-1 md:order-1">
            {leitura ? (
              <div className="text-left">
                {currentReading === 'primeiraLeitura' && (
                  <div className="leitura-item mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-red-600">Primeira Leitura</h3>
                    <div dangerouslySetInnerHTML={{ __html: leitura.primeiraLeitura }} style={{ textAlign: 'left', color: 'gray-100', fontFamily: 'arial' }} />
                  </div>
                )}
                {currentReading === 'salmoResponsorial' && (
                  <div className="leitura-item mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-red-600">Salmo Responsorial</h3>
                    <div dangerouslySetInnerHTML={{ __html: leitura.salmoResponsorial }} style={{ textAlign: 'left', color: 'gray', fontFamily: 'arial' }} />
                  </div>
                )}
                {currentReading === 'segundaLeitura' && leitura.segundaLeitura && (
                  <div className="leitura-item mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-red-600">Segunda Leitura</h3>
                    <div dangerouslySetInnerHTML={{ __html: leitura.segundaLeitura }} style={{ textAlign: 'left', color: 'gray', fontFamily: 'arial' }} />
                  </div>
                )}
                {currentReading === 'evangelho' && (
                  <div className="leitura-item mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-red-600">Evangelho</h3>
                    <div dangerouslySetInnerHTML={{ __html: leitura.evangelho }} style={{ textAlign: 'left', color: 'gray', fontFamily: 'arial' }} />
                  </div>
                )}
              </div>
            ) : (
              <p className="text-lg text-center text-gray-700">Obtendo Liturgia...</p>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-lg p-6 mb-8 max-w-6xl mx-auto">
        <h2 className="font-serif text-center text-3xl font-bold text-gray-800 mb-6" >
          Santo do Dia
        </h2>
        {santo ? (
          <div className="text-center" >

            <h3 className="text-xl font-bold text-gray-800 mb-2">{santo.nome}</h3>
            <img src={santo.imagemUrl} alt={santo.nome} className="mx-auto mb-4" />
            <div dangerouslySetInnerHTML={{ __html: santo.descricao }} style={{ textAlign: 'left', color: 'gray', fontFamily: 'arial' }} />
            <p className="text-lg font-semibold text-gray-800">{santo.dataComemorativa}</p>
          </div>
        ) : (
          <p className="text-lg text-center text-gray-700">Obtendo Santo do Dia...</p>
        )}

        <h4>Fontes:</h4>

        <li>Livro:"Dia a Dia com os santos 2024" Mês Junho
          <li>Canção Nova-Liturgia Diaria</li>

        </li>

      </div>
    </div>
  );
};

export default LeituraDiaria;
