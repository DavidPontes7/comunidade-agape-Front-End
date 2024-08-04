import { Link } from 'react-router-dom';

export default function Historia() {

  return (

    <div className="">
      {/* Seção de destaque */}

      {/* Seção de informações */}
      <section id="infoSection" className="font-serif  container mx-auto py-8 px-4 md:px-8">
        <div className="mb-8">

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Origem e Fundação</h2>
            <p className="text-lg text-gray-900 font-serif leading-relaxed mb-4">
              Quem podia imaginar que uma tarde ensolarada no dia 10 de abril de 2004, em um colégio em Tobias Barreto, SE, transformaria gerações, vidas de pessoas e famílias? Cleverson Silva, ex-missionário da Comunidade Shalom, retornou à sua cidade natal e ficou chocado ao perceber que havia poucos jovens participando da Santa Missa. Inquieto e angustiado com a situação, procurou o Monsenhor local para ajudar a resgatar a juventude da cidade.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              O Monsenhor, feliz com a disponibilidade de Cleverson, pediu-lhe para reativar o extinto grupo Água Viva, mas infelizmente o grupo precisou ser fechado novamente pouco depois. Sentindo que o Espírito Santo o guiava, Cleverson procurou novamente o Monsenhor, que deu carta branca para a criação de um novo grupo, o Projeto Nova Juventude.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              No dia 10 de abril de 2004, o Projeto Nova Juventude realizou seu primeiro encontro, reunindo jovens em uma tarde ensolarada. Nos primeiros anos, o movimento cresceu rapidamente e inflamou a juventude da cidade, transformando vidas e expandindo para mais grupos e localidades.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Expansão e Reconhecimento</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Com o tempo, o Projeto Nova Juventude evoluiu para Movimento Ágape, deixando de ser apenas um projeto local em Tobias Barreto para se tornar uma força que impactou diversas comunidades, cidades e estados. Na celebração de 10 anos, o fundador Cleverson recebeu o reconhecimento de Gilberto, coordenador das Novas Comunidades Internacionais, que confirmou que o carisma do grupo era de uma Nova Comunidade.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Hoje, após incríveis 20 anos desde sua fundação, o Movimento Ágape continua a pulsar entre seus membros, atendendo crianças, adolescentes, jovens e famílias. Como diz o fundador, "os jovens estão na UTI da fé" e, para resgatá-los, é necessário seguir "uma obra nova, um caminho novo".
            </p>
          </section>

        </div>

        {/* Seção de eventos */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <img src='https://github.com/AdsonVicente/ImagensUrlDados/blob/main/fundadores.jpg?raw=true' alt="Fundação" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8">
            <h3 className="text-2xl  font-semibold text-gray-800 mb-4">Fundação</h3>
            <p className=" text-gray-700 leading-relaxed lg:text-xl">
              Em 2004, nasceu a Comunidade Católica Ágape sob a inspiração de Cleverson Silva Santos e Maria Ivone Paiva Soares. Seu chamado e dedicação foram os alicerces que sustentam nossa jornada até hoje.
            </p>
          </div>
        </div>

        {/* Seção de missões */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2 md:pl-8">
            <img src='https://github.com/AdsonVicente/ImagensUrlDados/blob/main/sinal.jpg?raw=true' alt="Missões" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:order-1 md:pr-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sinal</h3>
            <p className="lg:text-xl text-gray-700 leading-relaxed">
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
            <p className="lg:text-xl text-gray-700 leading-relaxed">
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
            <p className="lg:text-xl text-gray-700 leading-relaxed">
              Atualmente, nossa comunidade cresce e evolui mantendo-se fiel aos seus princípios fundadores. Continuamos a realizar missões, eventos comunitários e atividades de evangelização, sempre buscando inspirar e transformar vidas pelo amor de Cristo.
            </p>
          </div>
        </div>

        {/* Seção sobre Baluartes */}
        <span className="relative flex justify-center mb-8">
          <h2 className="text-3xl font-bold text-stone-900 relative z-10 px-4">
            Baluartes
            <span className="absolute inset-x-0 bottom-0 h-1 bg-amber-500 w-full"></span>
          </h2>
        </span>




        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Terezinha */}

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition duration-300 hover:shadow-lg">
            <Link to="/terezinha">
              <img src='https://github.com/AdsonVicente/ImagensUrlDados/blob/main/teresa.jpg?raw=true' alt="Terezinha do Menino Jesus" className="rounded-full w-36 h-36 mb-4 object-cover" />
            </Link>
            <h3 className="text-2xl font-semibold mb-2 text-center">Terezinha do Menino Jesus</h3>
            <Link to="/terezinha">
              <p className="text-gray-700 text-center">Clique aqui e conheça mais sobre nossa Baluarte</p>
            </Link>
          </div>
          {/* São Francisco */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition duration-300 hover:shadow-lg">
            <Link to="/francisco">
              <img src='https://github.com/AdsonVicente/ImagensUrlDados/blob/main/sao-francisco-de-assis-.jpg?raw=true' alt="São Francisco de Assis" className="rounded-full w-36 h-36 mb-4 object-cover" />
            </Link>
            <h3 className="text-2xl font-semibold mb-2">São Francisco de Assis</h3>
            <Link to="/francisco">
              <p className="text-gray-700 text-center">Clique aqui e conheça mais sobre nosso Baluarte</p>
            </Link>
          </div>
        </div>


        {/* Chamada para ação */}
        <div className="text-center mt-12">
          <h2 className="text-3xl text-gray-800 font-semibold mb-4">Junte-se à nossa missão</h2>
          <p className="text-lg text-gray-700 mb-8">Descubra como você pode fazer parte da nossa comunidade e contribuir para transformar vidas.</p>
          <Link to="/contato" className="bg-stone-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300">
            Entre em Contato
          </Link>
        </div>
      </section>
    </div>
  );
}
