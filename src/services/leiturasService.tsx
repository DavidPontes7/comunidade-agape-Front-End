import axios from 'axios';

export const getLeituraDiaria = async (data: string) => {
  try {
    const response = await axios.get('src/services/leituras-2024-06.json'); 
    const leituras = response.data;
    return leituras[data] || null;
  } catch (error) {
    console.error('Erro ao carregar leitura diária:', error);
    return null;
  }
};
