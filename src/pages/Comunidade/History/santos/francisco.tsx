export default function SaoFranciscoPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Imagem de São Francisco */}
        <div className="text-center mb-8">
          <img
            src='https://github.com/AdsonVicente/ImagensUrlDados/blob/main/sao-francisco-de-assis-.jpg?raw=true'
            alt="São Francisco de Assis"
            className="w-50 h-80 mx-auto mb-4 shadow-lg"
          />
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-800 uppercase tracking-wide mb-4">
            São Francisco de Assis
          </h1>
        </div>

        {/* Biografia de São Francisco */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Biografia</h2>
          <p className="text-gray-700">
            Francisco nasceu em Assis, na Úmbria (Itália) em 1182. Jovem orgulhoso, vaidoso e rico, que se tornou o mais italiano dos santos e o mais santo dos italianos. Com 24 anos, renunciou a toda riqueza para desposar a “Senhora Pobreza”.
          </p>
          <p className="text-gray-700">
            Aconteceu que Francisco foi para a guerra como cavaleiro, mas doente ouviu e obedeceu a voz do Patrão que lhe dizia: “Francisco, a quem é melhor servir, ao amo ou ao criado?”. Ele respondeu que ao amo. “Porque, então, transformas o amo em criado?”, replicou a voz.
          </p>
          <p className="text-gray-700">
            No início de sua conversão, foi como peregrino a Roma, vivendo como eremita e na solidão, quando recebeu a ordem do Santo Cristo na igrejinha de São Damião: “Vai restaurar minha igreja, que está em ruínas”. Partindo em missão de paz e bem, seguiu com perfeita alegria o Cristo pobre, casto e obediente.
          </p>
          <p className="text-gray-700">
            No campo de Assis havia uma ermida de Nossa Senhora chamada Porciúncula. Este foi o lugar predileto de Francisco e dos seus companheiros, pois na Primavera do ano de 1200 já não estava só; tinham-se unido a ele alguns valentes que pediam também esmola, trabalhavam no campo, pregavam, visitavam e consolavam os doentes.
          </p>
          <p className="text-gray-700">
            A partir daí, Francisco dedica-se a viagens missionárias: Roma, Chipre, Egito, Síria… Peregrinando até aos Lugares Santos. Quando voltou à Itália, em 1220, encontrou a Fraternidade dividida. Parte dos Frades não compreendia a simplicidade do Evangelho.
          </p>
          <p className="text-gray-700">
            Em 1223, foi a Roma e obteve a aprovação mais solene da Regra, como ato culminante da sua vida. Na última etapa de sua vida, recebeu no Monte Alverne os estigmas de Cristo, em 1224. Já enfraquecido por tanta penitência e cego por chorar pelo amor que não é amado, São Francisco de Assis, na igreja de São Damião, encontra-se rodeado pelos seus filhos espirituais e assim, recita ao mundo o cântico das criaturas.
          </p>
          <p className="text-gray-700">
            O seráfico pai, São Francisco de Assis, retira-se então para a Porciúncula, onde morre deitado nas humildes cinzas a 3 de outubro de 1226. Passados dois anos incompletos, a 16 de julho de 1228, o Pobrezinho de Assis era canonizado por Gregório IX. São Francisco de Assis, rogai por nós!
          </p>
        </div>

        {/* Devoção e Oração */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Devoção e Oração</h2>
          
          <p className="text-gray-700">
            Rezemos juntos a oração de São Francisco:
          </p>
          <p className="text-gray-700">
            Senhor, fazei de mim um instrumento da Vossa paz.<br />
            Onde houver ódio, que eu leve o amor.<br />
            Onde houver ofensa, que eu leve o perdão.<br />
            Onde houver discórdia, que eu leve a união.<br />
            Onde houver dúvidas, que eu leve a fé.<br />
            Onde houver erro, que eu leve a verdade.<br />
            Onde houver desespero, que eu leve a esperança.<br />
            Onde houver tristeza, que eu leve a alegria.<br />
            Onde houver trevas, que eu leve a luz.<br />
            Ó Mestre, fazei que eu procure mais:<br />
            consolar, que ser consolado;<br />
            compreender, que ser compreendido;<br />
            amar, que ser amado.<br />
            Pois é dando que se recebe.<br />
            É perdoando que se é perdoado.<br />
            E é morrendo que se vive para a vida eterna.<br />
          </p>
        </div>
        
        {/* importancia para a comunidade */}
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Importancia para a comunidade</h1>
            <p className="text-gray-700">
            São Francisco é baluarte da Comunidade para ensinar aos seus membros sobre a pobreza e a necessidade de despojamento.
          </p>
        </div>

      </div>
    </div>
  );
}
