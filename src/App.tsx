import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Layout from './componentes/layout/layout';
import 'tailwindcss/tailwind.css';
import History from './pages/Comunidade/History/Historia';
import DoacoesPage from './pages/doacao/doacao';
import ContactPage from './pages/Contato/contato';
import FormationPage from './pages/Formacao/formacao';
import SantaTerezinhaPage from './pages/Comunidade/History/santos/terezinha';
import SaoFranciscoPage from './pages/Comunidade/History/santos/francisco';
import LeituraDiaria from './pages/Liturgy/liturgia';
import Eventos from './pages/Comunidade/Eventos/evento';
import Formulario from './forms/inscrição';
import NewsDetailPage from './pages/Noticias/detailsNews';

import RadioPlayer from './pages/Radio/radio';
import Noticias from './pages/Noticias/Noticias';
import { Fundadores } from './pages/Comunidade/Fundadores/Fundadores';
import FormationDetailPage from './pages/Formacao/FormacaoDetalhes';
import AdminDashboard from './admin/dashboard/Dashboard';
import GerenciarConteudos from './admin/Gerenciamento/Gerenciar-Conteudo/GerenciarConteudos'; 
import CriarAdmin from './admin/Gerenciamento/Cadastrar-Administrador/CadastrarAdministrador';
import { AuthProvider } from './context/AuthContext';
import { ProtectLayout } from './services/ProtectLayout';
import Login from './admin/Login/login';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import AdminForm from './admin/Gerenciamento/Gerenciar-Conteudo/PublicarConteudo';




const App = () => {
  return (

    <div className="App">
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Layout> <Home /> </Layout>} />
            <Route path='/liturgia-diaria' element={<Layout> <LeituraDiaria /> </Layout>} />
            <Route path='/Historia' element={<Layout> <History /> </Layout>} />
            <Route path='/Noticias' element={<Layout> <Noticias /> </Layout>} />
            <Route path='/Doacao' element={<Layout> <DoacoesPage /> </Layout>} />
            <Route path='/Fundadores' element={<Layout> <Fundadores /> </Layout>} />
            <Route path='/Contato' element={<Layout> <ContactPage /> </Layout>} />
            <Route path='/Formacao' element={<Layout> <FormationPage /> </Layout>} />
            <Route path='/Terezinha' element={<Layout> <SantaTerezinhaPage /> </Layout>} />
            <Route path='/Francisco' element={<Layout> <SaoFranciscoPage /> </Layout>} />
            <Route path='/Eventos' element={<Layout> <Eventos /> </Layout>} />
            <Route path="/Noticias/:id" element={<Layout> <NewsDetailPage /> </Layout>} />
            <Route path='/Inscricao' element={<Layout> <Formulario /> </Layout>} />


            <Route path="/Radio" element={<Layout> <RadioPlayer /></Layout>} />
            <Route path='/formacao/:id' element={<Layout> <FormationDetailPage /> </Layout>} />

            {/* administrativas */}
            
            <Route path="/login" element={<Login />} />
            <Route path="/Dashboard" element={<ProtectLayout><AdminDashboard /></ProtectLayout>} />
            <Route path="/CriarAdministrador" element={<ProtectLayout><CriarAdmin /></ProtectLayout>} />
            <Route path="/GerenciarConteudo" element={<ProtectLayout><GerenciarConteudos /></ProtectLayout>} />
            <Route path="/admin/Criar" element={<ProtectLayout><AdminForm /></ProtectLayout>} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>

  );
};

export default App;
