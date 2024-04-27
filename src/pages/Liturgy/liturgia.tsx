import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css'


function LiturgiaDiaria() {
    const [liturgia, setLiturgia] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [selectedReading, setSelectedReading] = useState<string>('first_reading');

    useEffect(() => {
        const fetchLiturgia = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://intermediary-api.vercel.app/api`);
                setLiturgia(response.data);
            } catch (error) {
                console.error("Erro ao carregar os dados da API:", error);
            }
            setLoading(false);
        };
        fetchLiturgia();
    }, []);

    const handleReadingChange = (reading: string) => {
        setSelectedReading(reading);
    };

    return (
        <div className='liturgia-container md:base'>
            {loading && <p>Carregando...</p>}
            {liturgia && (
                <>
             <h1 className='text-center border-b-2 border-black inline-block p-8 mb-20 text-2xl font-serif'>Liturgia Diária</h1>


            
                    <div className='element-buttons'>
                        <button onClick={() => handleReadingChange('first_reading')}>1° Leitura</button>
                        <button onClick={() => handleReadingChange('psalm')}>Salmo</button>
                        <button onClick={() => handleReadingChange('second_reading')}>2° Leitura</button>
                        <button onClick={() => handleReadingChange('gospel')}>Evangelho</button>
                    </div>
                    <div className='element-content'>
                        {selectedReading === 'first_reading' && (
                            <>
                                <div className='font'>{liturgia.source}</div>
                                <div dangerouslySetInnerHTML={{ __html: liturgia.today.readings.first_reading.all_html }}></div>
                            </>
                        )}
                        {selectedReading === 'psalm' && (
                            <>
                                <div className='font'>{liturgia.source}</div>
                                <div dangerouslySetInnerHTML={{ __html: liturgia.today.readings.psalm.all_html }}></div>
                            </>
                        )}
                        {selectedReading === 'second_reading' && (
                            <>
                                <div className='font'>{liturgia.source}</div>
                                <div dangerouslySetInnerHTML={{ __html: liturgia.today.readings.second_reading.all_html }}></div>
                            </>
                        )}
                        {selectedReading === 'gospel' && (
                            <>
                                <div className='font'>{liturgia.source}</div>
                                <div dangerouslySetInnerHTML={{ __html: liturgia.today.readings.gospel.all_html }}></div>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default LiturgiaDiaria;
