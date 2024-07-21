import { Link } from 'react-router-dom';

const NewsCard = ({ date, title, imageUrl, link }: any) => {
  return (
    <div className="flex items-start mb-6 pb-6 border-b border-gray-200">
      <Link to={link} className="inline-block mr-5">
        <div
          className="w-20 h-20 bg-cover bg-center "
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </Link>
      <div className="text-base">
        <p className="text-gray-600 text-sm mb-2">{date}</p>
        <a href={link} className="text-gray-900 font-semibold hover:text-red-600 leading-tight" target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
};

const LateralCards = () => {
  return (
    <div className="sm:col-span-6 md:hidden lg:block sm:block lg:col-span-4">
      <div className="items-center mb-6">
        <h2 className="text-2xl font-bold text-stone-700" style={{ fontFamily: 'aktiv-grotesk, sans-serif', fontWeight: 500 }}>
          Formações Especiais do Fundador
        </h2>
        <hr className="border-t-2 border-amber-500 my-4 w-28 ml-1" />
      </div>
      <NewsCard
        date="Formação"
        title="Nosso Fundador: Ensinamentos Profundos sobre Pentecostes."
        imageUrl="https://images.squarespace-cdn.com/content/v1/63e64be0831faf1c806eacdb/a1c30e22-5094-46c4-913c-3355d274543d/Pentecostes.jpg"
        link="https://youtu.be/PN9E2CSq_RA?si=2GkJEbyNdJP-KPaE"
      />
      <NewsCard
        date="Formação"
        title="A Conversão de Mateus: Reflexões a Partir do Evangelho (Mt 9,9-13)"
        imageUrl="https://www.aves.org.br/wp-content/uploads/2021/07/Jesus-e-Mateus.jpg"
        link="https://youtu.be/v6q-nnNKpGc?si=2qsFcB8UTUUW4G7S"
      />
      <NewsCard
        date="Formação"
        title="Nosso Fundador: Reflexões Inspiradoras sobre Nossa Senhora"
        imageUrl="https://www.paieterno.com.br/wp-content/uploads/2023/05/suplica-a-nossa-senhora-das-gracas.jpg"
        link="https://youtu.be/vsBHQqeFwmM?si=bM86MPSMs4xmO66T"
      />
      <NewsCard
        date="Formação"
        title="A moeda, a Ovelha e o Filho Pródigo"
        imageUrl="https://img.freepik.com/fotos-premium/imagem-xaa-capturando-a-cena-da-ovelha-perdida-sendo-carinhosamente-levada-de-volta-pelo-pastor_958297-9562.jpg"
        link="https://youtu.be/xI-4-aYb3Ws?si=4AudBydwLkfIroUh"
      />
    </div>
  );
};

export default LateralCards;
