import React, { useState } from "react";

const DonationPage: React.FC = () => {
  const [showPixInfo, setShowPixInfo] = useState(false);
  const [showBankTransferInfo, setShowBankTransferInfo] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [pixKey] = useState("79999504661");

  const handlePixButtonClick = () => {
    setShowPixInfo(true);
    setShowBankTransferInfo(false);
  };

  const handleBankTransferButtonClick = () => {
    setShowPixInfo(false);
    setShowBankTransferInfo(true);
  };

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  const copyPixKeyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    alert("Chave PIX copiada para a área de transferência!");
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-black">
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl lg:text-7xl font-extrabold uppercase tracking-wide text-blue-300 mb-4">Faça sua Doação</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Seu apoio é fundamental para impulsionar nossos projetos e atividades. Agradecemos imensamente pela sua generosidade.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={handlePixButtonClick}
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out focus:outline-none"
          >
            Doar via PIX
          </button>
          <button
            onClick={handleBankTransferButtonClick}
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out focus:outline-none"
          >
            Transferência Bancária
          </button>
        </div>
        <div className="text-xl max-w-2xl mx-auto mb-8">
          <p className="font-semibold">Como sua doação será usada:</p>
          <p className="mt-2">
            Estamos em uma campanha intensa e cada contribuição faz uma enorme diferença! Você pode participar deste novo movimento de Deus que já está acontecendo. Sua ajuda é essencial para a evangelização e você pode ser um agente da providência em nossa Comunidade! Junte-se a nós e faça parte desta jornada de fé e amor.
          </p>
        </div>
        {showPixInfo && (
          <div className="text-xl max-w-2xl mx-auto mb-8">
            <p className="font-semibold">Instruções para Doação via PIX:</p>
            <ol className="list-decimal list-inside">
              <li>Abra o aplicativo do seu banco.</li>
              <li>Selecione a opção de pagamento via PIX.</li>
              <li>Cole a chave PIX abaixo ou use a chave PIX: <strong>{pixKey}</strong></li>
            </ol>
            <div className="flex justify-center mt-4">
              <button
                onClick={toggleQRCode}
                className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out focus:outline-none"
              >
                {showQRCode ? "Esconder QR Code" : "Mostrar QR Code"}
              </button>
              <button
                onClick={copyPixKeyToClipboard}
                className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out focus:outline-none ml-4"
              >
                Copiar Chave PIX
              </button>
            </div>
            {showQRCode && (
              <div className="mt-4 flex justify-center">
                <img
                  src=""
                  alt="QR Code PIX"
                  className="w-32 h-32 object-contain"
                />
              </div>
            )}
          </div>
        )}
        {showBankTransferInfo && (
          <div className="text-xl max-w-2xl mx-auto mb-8">
            <p className="font-semibold">Informações para Transferência Bancária:</p>
            <ul className="list-disc list-inside">
              <li>Banco: agape</li>
              <li>Agência: 1234</li>
              <li>Conta: 5678-9</li>
              <li>Titular: aa</li>
              <li>CPF/CNPJ: 123.456.789-00</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default DonationPage;
