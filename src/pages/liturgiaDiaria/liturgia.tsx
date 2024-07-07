import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';
import { getLeituraDiaria } from '../../services/liturgia-services/leiturasService';
import { getSantoDoDia } from '../../services/santos-services/santosService';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiCalendar } from 'react-icons/fi'; // Importe o ícone desejado
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
          setLiturgicalColorBackground('#4CAF50');
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

  const customInput = (
    <div className="relative">
      <input
        type="text"
        value={dataAtual.toLocaleDateString('pt-BR')}
        readOnly
        className="bg-stone-100 border-stone-400 rounded p-2 w-full text-center"
      />
      <FiCalendar
        className="absolute right-3 top-3 cursor-pointer"
        onClick={() => { } /* Implemente a lógica para abrir o calendário */}
      />
    </div>
  );
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
    <div className="container lg:w-1/2 mx-auto p-6">
      
      <h1 className="font-light text-center text-4xl  text-gray-800 mb-8 mt-12 border-b " style={{ color: leitura && liturgicalColorBackground, fontFamily: "serif" }}>
        Liturgia Diária
      </h1>
      <div className="">
            <DatePicker
              selected={dataAtual}
              onChange={(date) => setDataAtual(date)}
              dateFormat="yyyy-MM-dd"
              locale="pt-BR"
              customInput={customInput}
              wrapperClassName="custom-datepicker-wrapper"
              calendarClassName="custom-calendar"
            />
          </div>
      
      <div className="rounded-lg shadow-lg p-6 mb-8 max-w-6xl mx-auto">
        
        <div className="text-center lg:ml-5 lg:w-1/2 mb-6">
          <div className="lg:w-1/2  flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faBookmark} style={{ color: leitura && liturgicalColorBackground, fontSize: '20px', marginRight: '8px' }} />
            <h3 style={{ color: liturgicalColorBackground, fontSize: '19px', fontWeight: 'bold', fontFamily: "sans-serif" }}>Cor Litúrgica:</h3>
            <span className="align-items-center text-base ml-1" style={{ color: leitura && liturgicalColorBackground, fontSize: '19px', fontWeight: 'bold' }}>{leitura && leitura.corLiturgica}</span>
          </div>
          <h1 className="text-3xl font-light text-gray-800 mb-6">{leitura && leitura.titulo}</h1>
        </div>

        <div className="lg:w-1/2 flex flex-wrap justify-center gap-4 mb-8">
        
          <button
            onClick={() => handleReadingChange('primeiraLeitura')}
            className={`py-2 px-4 rounded font-bold text-white transition bg-stone-600 hover:bg-amber-500 ${currentReading === 'primeiraLeitura' ? 'bg-blue-700' : ''}`}
          >
            1° Leitura
          </button>
          <button
            onClick={() => handleReadingChange('salmoResponsorial')}
            className={`py-2 px-4 rounded font-bold text-white transition bg-stone-600 hover:bg-amber-500 ${currentReading === 'salmoResponsorial' ? 'bg-blue-700' : ''}`}
          >
            Salmo
          </button>
          {leitura?.segundaLeitura && (
            <button
              onClick={() => handleReadingChange('segundaLeitura')}
              className={`py-2 px-4 rounded font-bold text-white transition bg-stone-600 hover:bg-amber-500 ${currentReading === 'segundaLeitura' ? 'bg-blue-700' : ''}`}
            >
              2° Leitura
            </button>
          )}
          <button
            onClick={() => handleReadingChange('evangelho')}
            className={`py-2 px-4 rounded font-bold text-white transition bg-stone-600 hover:bg-amber-500 ${currentReading === 'evangelho' ? 'bg-blue-700' : ''}`}
          >
            Evangelho
          </button>
          
        </div>

        <div className="md:flex md:space-x-6 justify-center items-center">
          


          <div className="flex-1 md:order-1">
            {leitura ? (
              <div className="text-left">
                {currentReading === 'primeiraLeitura' && (
                  <div className="leitura-item mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2" style={{ color: liturgicalColorBackground }}>Primeira Leitura</h3>
                    <div dangerouslySetInnerHTML={{ __html: leitura.primeiraLeitura }} style={{ textAlign: 'left', color: 'gray', fontFamily: 'arial' }} />
                  </div>
                )}
                {currentReading === 'salmoResponsorial' && (
                  <div className="leitura-item mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2" style={{ color: liturgicalColorBackground }}>Salmo Responsorial</h3>
                    <div dangerouslySetInnerHTML={{ __html: leitura.salmoResponsorial }} style={{ textAlign: 'left', color: 'gray', fontFamily: 'arial' }} />
                  </div>
                )}
                {currentReading === 'segundaLeitura' && leitura.segundaLeitura && (
                  <div className="leitura-item mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2" style={{ color: liturgicalColorBackground }}>Segunda Leitura</h3>
                    <div dangerouslySetInnerHTML={{ __html: leitura.segundaLeitura }} style={{ textAlign: 'left', color: 'gray', fontFamily: 'arial' }} />
                  </div>
                )}
                {currentReading === 'evangelho' && (
                  <div className="leitura-item mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2" style={{ color: liturgicalColorBackground }}>Evangelho</h3>
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
        <h2 className="font-serif text-center text-3xl font-bold text-gray-800 mb-6">Santo do Dia</h2>
        {santo ? (
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{santo.nome}</h3>
            <p className="text-base text-gray-600">{santo.descricao}</p>
          </div>
        ) : (
          <p className="text-lg text-center text-gray-700">Obtendo Santo do Dia...</p>
        )}
      </div>
    </div>
  );
};

export default LeituraDiaria;
