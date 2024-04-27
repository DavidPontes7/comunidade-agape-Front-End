import React, { useState } from 'react';

const DoacoesPage: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className=" from-yellow-200 to-yellow-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto    bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-6 sm:px-6">
          <h1 className="text-3xl font-bold text-center text-yellow-700 mb-4">Faça uma doação</h1>
          <p className="text-lg text-gray-800 mb-6">
            Sua generosidade é crucial para nós! Com sua doação, podemos continuar a servir a comunidade e promover nossas atividades. Por favor, considere fazer uma doação para apoiar nossa missão.
          </p>
          <div className="flex flex-col items-center mb-6">
            <img src="caminho-para-o-seu-codigo-qr-pix" alt="PIX Code" className="w-64 h-64 mb-4" />
            <p className="text-lg text-gray-800">Escanee o código QR para fazer sua doação através do PIX.</p>
            <p className="text-lg text-gray-800">Chave PIX: insira-aqui-a-sua-chave-pix</p>
          </div>
          <p className="text-lg text-gray-800 mb-6">
            Se preferir, você também pode fazer sua doação através de transferência bancária para a seguinte conta:
          </p>
          <div className="text-lg text-gray-800 mb-6">
            <p className="mb-1">Banco: [Nome do Banco]</p>
            <p className="mb-1">Agência: [Número da Agência]</p>
            <p className="mb-1">Conta: [Número da Conta]</p>
            <p className="mb-1">Nome: [Nome do Beneficiário]</p>
            <p>CPF/CNPJ: [CPF ou CNPJ do Beneficiário]</p>
          </div>
          <p className="text-lg text-gray-800">Agradecemos imensamente o seu apoio!</p>
        </div>
        <div className="bg-gray-100 p-4">
          <button
            onClick={handleDrawerToggle}
            className="text-yellow-700 font-semibold hover:underline focus:outline-none"
          >
            Ver como sua doação é utilizada
          </button>
        </div>
        {isDrawerOpen && (
          <div className="bg-gray-100 p-4">
            <h2 className="text-lg font-semibold mb-2">Como sua doação é utilizada:</h2>
            <p className="text-gray-800">
              Sua doação é essencial para sustentar nossas atividades, incluindo:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Manutenção dos locais utilizados para realizar acampamentos e congressos</li>
              <li>Apoio a programas de caridade locais, especialmente aqueles que beneficiam famílias carentes</li>
              <li>Ajuda para organização e realização de eventos, como acampamentos e congressos</li>
              <li>Desenvolvimento de recursos educacionais para crianças, jovens e famílias, incluindo materiais catequéticos e atividades</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoacoesPage;
