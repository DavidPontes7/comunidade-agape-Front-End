import { Link } from 'react-router-dom';
import founder from '../../../img//fundador.jpg';
import cofounder from '../../../img/CoFundadora.jpg'; // Adicione uma imagem da cofundadora

const PersonSection = ({ imgSrc, name, description }: any) => (
  <div className="md:flex items-center mb-12">
    <div className="md:w-1/2">
      <img src={imgSrc} alt={name} className="rounded-lg shadow-xl mb-4 md:mb-0 md:w-full transform transition duration-300 hover:scale-105" />
    </div>
    <div className="md:w-1/2 md:ml-8">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">{name}</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">{description}</p>
    </div>
  </div>
);

const QuoteSection = ({ quote, author }: any) => (
  <div className="bg-blue-100 py-8 px-4 md:px-8 rounded-lg shadow-md text-center my-12">
    <p className="text-xl italic text-gray-700 mb-4">"{quote}"</p>
    <p className="text-lg font-semibold text-gray-800">- {author}</p>
  </div>
);

const Fundador = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="relative bg-gradient-to-b from-blue-500 to-indigo-600 text-white h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl lg:text-7xl font-extrabold uppercase tracking-wide">Fundadores</h1>
          <p className="text-lg mt-4">Saiba mais sobre a inspiradora jornada de Cleverson Silva Santos e Maria Ivone Paiva Soares</p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 md:px-8">
        <PersonSection
          imgSrc={founder}
          name="Cleverson Silva Santos"
          description={
            <>
              <p>Cleverson Silva Santos nasceu no pequeno interior de Sergipe, na cidade de Tobias Barreto. Desejando obter uma graduação, ainda na adolescência mudou-se para a cidade de Aracaju para se preparar para o vestibular. Nessa mudança, frequentou a Comunidade Católica Shalom, onde teve um encontro pessoal com Nosso Senhor Jesus Cristo.</p>
              <p>Na Comunidade Shalom, nosso fundador foi missionário e passou pela cidade de Itapipoca, no Ceará.</p>
              <br />
              <p>Precisando retornar à sua cidade natal, nosso fundador ficou sentido com a ausência de jovens na paróquia, pois os adolescentes vagavam e tinham como principal atração a Avenida 7 de Junho.</p>
              <p>Na época, o fundador procurou o então pároco, Monsenhor, e se prontificou a ajudar no trabalho com a juventude.</p>
              <br />
              <p>Com a abertura do pároco, o fundador foi designado para reabrir o extinto grupo Água Viva, que havia sido fechado há pouco tempo. Com este grupo, alguns encontros ocorreram, mas o mesmo precisou ser fechado novamente.</p>
              <p>Diante disso, ardendo o coração do nosso fundador pela juventude, houve, <strong>no dia 10/04/2004,</strong> o primeiro encontro do Projeto Nova Juventude, em uma tarde, junto ao colégio Educandário Nossa Senhora do Carmo.</p>
              <p>Assim, passaram-se 20 anos de transformação da vida de inúmeros jovens.</p>
            </>
          }
        />
        <PersonSection
          imgSrc={cofounder}
          name="Maria Ivone Paiva Soares"
          description={
            <>
              <p>Ao lado do nosso fundador, encontrava-se e ainda se encontra nossa cofundadora Maria Ivone Paiva Soares, os quais se conheceram na Comunidade Shalom e juntos fundaram o carisma de Amor na cidade de Tobias Barreto, SE.</p>
              <p>Ivone, ou "mãe", como é conhecida, tem um olhar materno, sereno e zeloso.</p>
            </>
          }
        />

        <QuoteSection
          quote="O Ágape é a misericordia de Deus em minha vida."
          author="Cleverson Silva Santos"
        />

        <div className="text-center mt-16">
          <h2 className="text-3xl text-gray-800 font-semibold mb-4">Faça Parte da Nossa Missão</h2>
          <p className="text-lg text-gray-700 mb-8">Descubra como você pode se envolver e contribuir com a nossa comunidade.</p>
          <Link to="/contato" className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300">Entre em Contato</Link>
        </div>
      </section>
    </div>
  );
}

export default Fundador;
