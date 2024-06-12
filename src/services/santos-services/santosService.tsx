import axios from 'axios';

interface Santo {
  id: number;
  nome: string;
  descricao: string;
  dataComemorativa: string;
  imagemUrl: string;
}

export const getSantoDoDia = async (dataComemorativa: string): Promise<Santo | null> => {
  try {
    const response = await axios.get('src/services/santos-services/santos.json');
    const santos: Santo[] = response.data;
    const santo = santos.find(santo => santo.dataComemorativa === dataComemorativa);
    return santo || null;
  } catch (error) {
    console.error('Erro ao carregar informações sobre o Santo do dia.', error);
    return null;
  }
};
