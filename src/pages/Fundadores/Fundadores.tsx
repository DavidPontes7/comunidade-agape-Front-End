import { Link } from 'react-router-dom';

interface PersonSectionProps {
  imgSrc: string;
  name: string;
  description: JSX.Element;
}

const PersonSection: React.FC<PersonSectionProps> = ({ imgSrc, name, description }) => (
  <div className="grid md:grid-cols-2 md:gap-8 items-center mb-12">
    <div>
      <img
        src={imgSrc}
        alt={name}
        className="rounded-lg shadow-xl mb-4 md:mb-0 md:w-full transform transition duration-300 hover:scale-105"
      />
    </div>
    <div className="md:ml-8">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">{name}</h2>
      <div className="text-lg text-gray-700 leading-relaxed mb-8">{description}</div>
    </div>
  </div>
);

interface QuoteSectionProps {
  quote: string;
  author: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote, author }) => (
  <div className=" container bg-blue-100 py-8 px-4 md:px-8 rounded-lg shadow-md text-center my-12">
     <p className="text-2xl italic text-gray-700 mb-4">"{quote}"</p>
     <p className="text-xl font-semibold text-gray-800">- {author}</p>
  </div>
);

export const Fundadores: React.FC = () => (
  <div className="bg-white mx-auto">
    <section className="container mx-auto py-16 px-4 md:px-8">
      <PersonSection
        imgSrc="https://github.com/AdsonVicente/ImagensUrlDados/blob/3eda69f28672dc55a1f3334322b4c116f27e04ad/fundador.jpg?raw=true"
        name="Cleverson Silva Santos"
        description={
          <>
            <p>
              Cleverson Silva Santos nasceu em Tobias Barreto, uma pequena cidade no interior de Sergipe. Durante sua adolescência, mudou-se para Aracaju com o objetivo de se preparar para o vestibular. Em Aracaju, frequentou a Comunidade Católica Shalom, onde teve um encontro pessoal com Nosso Senhor Jesus Cristo.
            </p>
            <p>
              Durante seu tempo na Comunidade Shalom, Cleverson atuou como missionário e passou pela cidade de Itapipoca, no Ceará.
            </p>
            <p>
              Ao retornar à sua cidade natal, percebeu a ausência de jovens na paróquia e a falta de opções atrativas para eles, além da Avenida 7 de Junho, que atraía muitos adolescentes. Preocupado com essa situação, Cleverson procurou o pároco da época, Monsenhor, e ofereceu sua ajuda para trabalhar com a juventude.
            </p>
            <p>
              Com o apoio do pároco, Cleverson foi encarregado de reabrir o grupo Água Viva, que havia sido fechado recentemente. Apesar de alguns encontros iniciais, o grupo teve que ser fechado novamente.
            </p>
            <p>
              Movido pelo desejo de transformar a vida dos jovens, Cleverson iniciou, no dia 10 de abril de 2004, o Projeto Nova Juventude, com um primeiro encontro realizado no Educandário Nossa Senhora do Carmo.
            </p>
            <p>
              Desde então, passaram-se 20 anos de trabalho e transformação na vida de inúmeros jovens.
            </p>
          </>
        }
      />

      <PersonSection
        imgSrc="https://github.com/AdsonVicente/ImagensUrlDados/blob/3eda69f28672dc55a1f3334322b4c116f27e04ad/CoFundadora.jpg?raw=true"
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
        <Link
          to="/contato"
          className="bg-stone-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
        >
          Entre em Contato
        </Link>
      </div>
    </section>
  </div>
);
