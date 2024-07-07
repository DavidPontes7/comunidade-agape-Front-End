// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';


// const EditarConteudo = () => {
//   const { id } = useParams(); // Obtém o ID do conteúdo da URL
//   const [novoTitulo, setNovoTitulo] = useState('');
//   const [novoCorpo, setNovoCorpo] = useState('');

//   useEffect(() => {
//     // Lógica para buscar o conteúdo atual (opcional)
//   }, []);

//   const handleEditar = async (e:any) => {
//     e.preventDefault();
//     try {
//       await editarConteudo(id, novoTitulo, novoCorpo);
//       alert('Conteúdo editado com sucesso!');
//       // Lógica adicional após a edição, como redirecionar ou atualizar estado
//     } catch (error) {
//       console.error('Erro ao editar conteúdo:', error);
//       alert('Erro ao editar conteúdo. Verifique o console para mais detalhes.');
//     }
//   };

//   return (
//     <div>
//       <h2>Editar Conteúdo</h2>
//       <form onSubmit={handleEditar}>
//         <label>Novo Título:</label>
//         <input
//           type="text"
//           value={novoTitulo}
//           onChange={(e) => setNovoTitulo(e.target.value)}
//           placeholder="Novo título"
//         />
//         <label>Novo Corpo:</label>
//         <textarea
//           value={novoCorpo}
//           onChange={(e) => setNovoCorpo(e.target.value)}
//           placeholder="Novo corpo"
//         />
//         <button type="submit">Salvar Alterações</button>
//       </form>
//     </div>
//   );
// };

// export default EditarConteudo;
