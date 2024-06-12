import React from 'react';
import ReactPlayer from 'react-player';

const RadioPlayer: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
 <h1>Transmitindo o Amor de Deus</h1>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Transmissão ao vivo</h1>
        {/* Substitua a URL abaixo pela URL da sua transmissão ao vivo */}
        <ReactPlayer url="https://fb.watch/sFjsgd4se2/" playing controls width="100%" height="500px" />
      </div>
      {/* Player Embedado */}
      <h1>Player</h1>
      <iframe
        src="https://p.stmip.net/Dr58668/xplay.html"
        frameBorder="0"
        width="80%"
        height="75"
        scrolling="no"
        
        allow="autoplay"
        className="mb-8 rounded-lg shadow-lg"
        style={{ border: '2px solid #000', borderRadius: '10px', backgroundColor: 'white' }}
      ></iframe>

      {/* Seção da Programação */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Programação</h3>
        <p className="text-gray-700 mb-4">
          Confira nossa programação e não perca nenhum de nossos shows ao
          vivo!
        </p>
        {/* Aqui você pode adicionar os horários e detalhes da programação */}
      </div>

      {/* Links para Redes Sociais */}
      <div className="text-center mt-8">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Redes Sociais</h3>
        <div className="flex justify-center space-x-4">
          <a
            href="URL_DA_PAGINA_DO_FACEBOOK"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="URL_DO_PERFIL_DO_TWITTER"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          {/* Adicione outros links para redes sociais aqui */}
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
