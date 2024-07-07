import { Link } from 'react-router-dom';

const PersonSection = ({ imgSrc, name, description }: any) => (
  <div className="grid md:grid-cols-2 md:gap-8 items-center mb-12">
    <div>
      <img src={imgSrc} alt={name} className="rounded-lg shadow-xl mb-4 md:mb-0 md:w-full transform transition duration-300 hover:scale-105" />
    </div>
    <div className="md:ml-8">
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

export const Fundadores = () => {

  return (
    <div className="bg-white mx-auto">

      <section className="container mx-auto py-16 px-4 md:px-8">
        <PersonSection
          imgSrc='https://github.com/AdsonVicente/ImagensUrlDados/blob/3eda69f28672dc55a1f3334322b4c116f27e04ad/fundador.jpg?raw=true'
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
          imgSrc='https://github.com/AdsonVicente/ImagensUrlDados/blob/3eda69f28672dc55a1f3334322b4c116f27e04ad/CoFundadora.jpg?raw=true'
          name="Maria Ivone Paiva Soares"
          description={
            <>
              <p>Ao lado do nosso fundador, encontrava-se e ainda se encontra nossa cofundadora Maria Ivone Paiva Soares, os quais se conheceram na Comunidade Shalom e juntos fundaram o carisma de Amor na cidade de Tobias Barreto, SE.</p>
              <p>Ivone, ou "mãe", como é conhecida, tem um olhar materno, sereno e zeloso.</p>
            </>
          }
        />

        <QuoteSection
          quote="O Ágape é a misericórdia de Deus em minha vida."
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
