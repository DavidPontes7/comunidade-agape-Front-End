import React, { useState } from "react";
import qrcodePix from '../../img/qrcode.png';

const DonationPage: React.FC = () => {
  const [showPixInfo, setShowPixInfo] = useState(false);
  const [showBankTransferInfo, setShowBankTransferInfo] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [pixKey] = useState("chave-da-comunidade");

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
        <h1 className="text-4xl lg:text-7xl font-extrabold uppercase tracking-wide text-yellow-300">Faça sua Doação</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Sua doação ajuda a apoiar nossos projetos e atividades católicas. Agradecemos por sua generosidade.
        </p>
        <div className="mt-8">
          <p className="text-xl">Escolha uma forma de doar:</p>
          <div className="flex justify-center mt-8">
            <button onClick={handlePixButtonClick} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold mr-4 hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out focus:outline-none">
              Doar via PIX
            </button>
            <button onClick={handleBankTransferButtonClick} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out focus:outline-none">
              Transferência Bancária
            </button>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-2xl font-semibold">Como sua doação será usada:</p>
          <p className="mt-4 max-w-2xl mx-auto">
            Sua doação será usada para apoiar nossos projetos de evangelização, assistência social, educação religiosa e manutenção das instalações da comunidade. 
            Graças à sua generosidade, podemos continuar a servir nossa comunidade e expandir nossos esforços para ajudar os necessitados.
          </p>
        </div>
        {showPixInfo && (
          <div className="mt-8">
            <p className="text-xl font-semibold">Instruções para Doação via PIX:</p>
            <p className="mt-2">1. Abra o aplicativo do seu banco.</p>
            <p className="mt-2">2. Selecione a opção de pagamento via PIX.</p>
            <p className="mt-2">3. Cole a chave PIX abaixo ou use a chave PIX: seu-email@exemplo.com</p>
            
            <div className="flex justify-center mt-4">
              <button onClick={toggleQRCode} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out focus:outline-none">
                {showQRCode ? "Esconder QR Code" : "Mostrar QR Code"}
              </button>
              <button onClick={copyPixKeyToClipboard} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out focus:outline-none ml-4">
                Copiar Chave PIX
              </button>
            </div>
            {showQRCode && (
              <div className="mt-4">
                <img src={qrcodePix} alt="QR Code PIX" className="w-32 h-32 mx-auto" />
              </div>
            )}
          </div>
        )}
        {showBankTransferInfo && (
          <div className="mt-8">
            <p className="text-xl font-semibold">Informações para Transferência Bancária:</p>
            <p className="mt-2">Banco: agape</p>
            <p className="mt-2">Agência: 1234</p>
            <p className="mt-2">Conta: 5678-9</p>
            <p className="mt-2">Titular: aa</p>
            <p className="mt-2">CPF/CNPJ: 123.456.789-00</p>
          </div>
        )}
        <div className="mt-8 mb-4"></div>
      </div>
    </section>
  );
};

export default DonationPage;
