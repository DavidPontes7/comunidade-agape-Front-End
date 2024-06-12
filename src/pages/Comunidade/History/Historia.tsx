import { Link } from 'react-router-dom';

const scrollToInfo = () => {
  const infoSection = document.getElementById('infoSection');
  if (infoSection) {
    infoSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Historia() {

  return (

    <div className="min-h-screen ">
      {/* Seção de destaque */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-wide leading-tight">Descubra Nossa História</h1>
          <p className="text-base sm:text-lg lg:text-xl mt-4">Uma jornada emocionante pelos momentos que moldaram nossa comunidade.</p>
          <button onClick={scrollToInfo} className="mt-8 bg-yellow-400 text-gray-800 py-2 px-4 sm:py-3 sm:px-6 rounded-full font-semibold uppercase tracking-wide hover:bg-yellow-500">Explorar Agora</button>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-0">
          
        </div>
      </section>

      {/* Seção de informações */}
      <section id="infoSection" className="container mx-auto py-8 px-4 md:px-8">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">Nossa História</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Seja bem-vindo à Comunidade Católica Ágape, onde encontramos inspiração nas palavras simples e profundas de Santa Teresinha do Menino Jesus: "Eu não tenho outra coisa a oferecer senão flores. E as flores que o Bom Deus coloca em meu caminho, por mais insignificantes que pareçam, são todas destinadas a Ele."
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Aqui na nossa comunidade, buscamos a santidade e a vida eterna no céu como objetivos comuns. Seguimos as regras de vida da comunidade, destacando valores fundamentais como a fraternidade, castidade e serviço.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ao longo da nossa história, muitos jovens foram acolhidos e encontraram no carisma do Ágape um caminho de amor e devoção. Desenvolvemos ao longo dos anos uma forma única de louvor e devoção, buscando expressar nossa fé e amor a Deus em todas as nossas atividades e celebrações.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Juntos, caminhamos na jornada da fé, fortalecendo uns aos outros e compartilhando o amor de Cristo com o mundo ao nosso redor.
          </p>
        </div>

        {/* Seção de eventos */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <img src='https://github.com/AdsonVicente/ImagensUrlDados/blob/main/fundadores.jpg?raw=true' alt="Fundação" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fundação</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Em 2004, nasceu a Comunidade Católica Ágape sob a inspiração de Cleverson Silva Santos e Maria Ivone Paiva Soares. Seu chamado e dedicação foram os alicerces que sustentam nossa jornada até hoje.
            </p>
          </div>
        </div>

        {/* Seção de missões */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2 md:pl-8">
            <img src='https://scontent.faju14-1.fna.fbcdn.net/v/t31.18172-8/28701056_2039056656333876_4376172300632538390_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ofkY5GGirskQ7kNvgGR2qKR&_nc_ht=scontent.faju14-1.fna&oh=00_AYDwAG56GXevprGVrS3uVEMUsn91Ps6w8py0l6NRkuydCA&oe=668FE711' alt="Missões" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:order-1 md:pr-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sinal</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              O coração da Comunidade Ágape bate na presença de Jesus Eucarístico. A Eucaristia é o centro de nossa devoção, lembrando-nos diariamente do sacrifício redentor de Cristo e inspirando-nos em nossa missão de amor e evangelização.
            </p>
          </div>
        </div>
        {/* Seção sobre Nossa Mãe Amável */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <img src='https://github.com/AdsonVicente/ImagensUrlDados/blob/main/maeamavel.jpg?raw=true' alt="Nossa Mãe Amável" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Mãe Amável</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Entre os títulos de Nossa Senhora, a Comunidade a chama de Mãe Amável, refletindo nosso carisma de amor. Maria é exemplo de amor e devoção, intercedendo por nós e guiando-nos em nossa jornada de fé.
            </p>
          </div>
        </div>

        {/* Seção sobre o presente */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2 md:pl-8">
            <img src='https://github.com/AdsonVicente/ImagensUrlDados/blob/main/acampamento-hoje.jpg?raw=true' alt="Hoje" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hoje</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Atualmente, nossa comunidade cresce e evolui mantendo-se fiel aos seus princípios fundadores. Continuamos a realizar missões, eventos comunitários e atividades de evangelização, sempre buscando inspirar e transformar vidas pelo amor de Cristo.
            </p>
          </div>
        </div>

        {/* Seção sobre Baluartes */}
        <h1 className="text-base md:text-6xl lg:text-7xl pl-4 my-4 border-l-8 border-yellow-400 dark:text-gray-500 font-bold italic">
          Nossos Baluartes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Terezinha */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition duration-300 hover:shadow-lg">
            <Link to="/terezinha">
              <img src='https://github.com/AdsonVicente/ImagensUrlDados/blob/main/teresa.jpg?raw=true' alt="Terezinha do Menino Jesus" className="rounded-full w-36 h-36 mb-4 object-cover" />
            </Link>
            <h3 className="text-2xl font-semibold mb-2">Terezinha do Menino Jesus</h3>
            <p className="text-gray-700 text-center">Clique aqui e conheça mais sobre nossa Baluarte</p>
          </div>
          {/* São Francisco */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition duration-300 hover:shadow-lg">
            <Link to="/francisco">
              <img src='https://github.com/AdsonVicente/ImagensUrlDados/blob/main/sao-francisco-de-assis-.jpg?raw=true' alt="São Francisco de Assis" className="rounded-full w-36 h-36 mb-4 object-cover" />
            </Link>
            <h3 className="text-2xl font-semibold mb-2">São Francisco de Assis</h3>
            <p className="text-gray-700 text-center">Clique aqui e conheça mais sobre nosso Baluarte</p>
          </div>
        </div>


        {/* Chamada para ação */}
        <div className="text-center mt-12">
          <h2 className="text-3xl text-gray-800 font-semibold mb-4">Faça Parte da Nossa Comunidade</h2>
          <p className="text-lg text-gray-700 mb-8">Descubra como você pode se envolver e contribuir com a nossa missão.</p>
          <Link to="/contato" className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300">Entre em Contato</Link>
        </div>
      </section>
    </div>
  );
}
