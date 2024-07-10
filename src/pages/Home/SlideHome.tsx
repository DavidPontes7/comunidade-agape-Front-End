import { motion } from "framer-motion";

const BemVindoSecao = () => {
  return (
    <section
      className="hidden lg:block relative h-screen flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://scontent.faju14-1.fna.fbcdn.net/v/t39.30808-6/425706909_18283376221089849_5292852547166539092_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Vm4QIJSCxRYQ7kNvgEP0Tn-&_nc_ht=scontent.faju14-1.fna&oh=00_AYAulxw3o8eCY5aV4LdECOp45dZOAymC1wqRVwzRWstgkg&oe=668D02F8')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
        maxHeight: '80vh',
        width: '100%',
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-opacity-40 bg-black">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-wide leading-tight mt-24 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bem-vindo
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg lg:text-xl mt-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
        >
          Um carisma de Amor suscitado pelo Espírito Santo, a Comunidade Católica Ágape foi criada para a evangelização e formação de jovens, crianças e casais.
        </motion.p>
      </div>
    </section>
  );
};

export default BemVindoSecao;
