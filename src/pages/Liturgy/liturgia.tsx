
// import axios from 'axios';

// function LiturgiaDiaria() {
//   const [liturgia, setLiturgia] = useState(null);

//   useEffect(() => {
//     async function fetchLiturgia() {
//       try {
//         const response = await axios.get('https://api-liturgia-diaria.vercel.app/');
//         setLiturgia(response.data);
//       } catch (error) {
//         console.error('Erro ao buscar dados da API:', error);
//       }
//     }

//     fetchLiturgia();
//   }, []);

//   return (
//     <div>
//       {liturgia ? (
//         <div>
//           <h2>{liturgia.title}</h2>
//           <p>{liturgia.content}</p>
//         </div>
//       ) : (
//         <p>Carregando...</p>
//       )}
//     </div>
//   );
// }

// export default LiturgiaDiaria;
