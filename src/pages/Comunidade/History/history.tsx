import { Link } from 'react-router-dom';
import terezinhaImg from '../../../img/teresa.jpg';
import franciscoImg from '../../../img/francisco.jpg';
import fundacaoImg from '../../../img/fundadores.jpg';
import missoesImg from '../../../img/sinalcomunidade.jpg';
import hojeImg from '../../../img/adoracao.jpg';
import maeAmavelImg from '../../../img/maeamavel.jpg';  // Adicione a imagem da Nossa Senhora

export default function History() {
  return (

    <div className=" min-h-screen">
      <section className="relative bg-gradient-to-b from-blue-500 to-indigo-600 text-white h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl lg:text-7xl font-extrabold uppercase tracking-wide">SOBRE NÓS</h1>
          <p className="text-lg mt-4">Conheça a nossa história e missão</p>
        </div>
      </section>

      <section className="container mx-auto py-8 px-4 md:px-8">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">Nossa História</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Bem-vindo à Comunidade Católica Ágape, onde encontramos inspiração nas palavras simples e profundas de Santa Teresinha do Menino Jesus: "Eu não tenho outra coisa a oferecer senão flores. E as flores que o Bom Deus coloca em meu caminho, por mais insignificantes que pareçam, são todas destinadas a Ele."
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Nossa comunidade é católica e temos como objetivo comum o desejo de alcançar a santidade e a vida eterna no céu. Seguimos as regras de vida da comunidade, destacando os valores da fraternidade, castidade e serviço.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Em nossa história, muitos jovens foram acolhidos e encontraram no carisma do Ágape um caminho de amor e devoção. Ao longo dos anos, desenvolvemos uma forma única de louvor e devoção, buscando expressar nossa fé e amor a Deus em todas as nossas atividades e celebrações.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Juntos, caminhamos na jornada da fé, fortalecendo uns aos outros e compartilhando o amor de Cristo com o mundo ao nosso redor.
          </p>
        </div>

        {/* Seção da Fundação */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <img src={fundacaoImg} alt="Fundação" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fundação</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa comunidade foi fundada em 2004 por Cleverson Silva Santos e Maria Ivone Paiva Soares. Sua visão e dedicação foram fundamentais para estabelecer as bases sólidas que hoje sustentam nossas atividades e valores.
            </p>
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2 md:pl-8">
            <img src={missoesImg} alt="Missões" className="rounded-lg shadow-md w-full " />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:order-1 md:pr-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sinal</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Jesus Eucarístico é o centro da nossa fé e o sinal da nossa comunidade. A Eucaristia, que é a presença real de Jesus Cristo em corpo, sangue, alma e divindade, nos lembra diariamente do sacrifício supremo de Cristo por nós. É através da Eucaristia que encontramos força, consolo e inspiração para nossa missão de evangelização.
            </p>
          </div>
        </div>

        {/* Seção Nossa Mãe Amável */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <img src={maeAmavelImg} alt="Nossa Mãe Amável" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Mãe Amável</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Entre os vários títulos de Nossa Senhora, a Comunidade a intitula de Mãe Amável, haja vista o Carisma de Amor. Maria, nossa Mãe Amável, é um exemplo constante de amor e devoção. Sua intercessão e proteção são fundamentais para a nossa fé e missão.
            </p>
          </div>
        </div>

        {/* Seção do Hoje */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2 md:pl-8">
            <img src={hojeImg} alt="Hoje" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hoje</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hoje, nossa comunidade continua a crescer e a evoluir, sempre fiel aos nossos princípios fundadores. Continuamos a realizar missões, eventos comunitários e atividades de evangelização, sempre com o objetivo de inspirar e transformar vidas através do amor de Cristo.
            </p>
          </div>
        </div>

        <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-800 uppercase tracking-wide mb-4">Baluartes</h1>
        <hr className="border-t-2 border-gray-200 mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Terezinha */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <Link to="/terezinha">
              <img src={terezinhaImg} alt="Terezinha do Menino Jesus" className="rounded-full w-36 h-36 mx-auto mb-4 object-cover" />
            </Link>
            <h3 className="text-xl font-semibold mb-2">Terezinha do Menino Jesus</h3>
            <p className="text-gray-700 text-center">Clique e conheça mais sobre nossa Baluarte</p>
          </div>
          {/* São Francisco */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <Link to="/francisco">
              <img src={franciscoImg} alt="São Francisco de Assis" className="rounded-full w-36 h-36 mx-auto mb-4 object-cover" />
            </Link>
            <h3 className="text-xl font-semibold mb-2">São Francisco de Assis</h3>
            <p className="text-gray-700 text-center">Clique e conheça mais sobre nosso Baluarte</p>
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
