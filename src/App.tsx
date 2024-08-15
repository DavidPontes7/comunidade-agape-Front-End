import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Layout from './componentes/layout/layout';
import 'tailwindcss/tailwind.css';
import Historia from './pages/sobre/Historia';
import DoacoesPage from './pages/doacao/doacao';
import ContactPage from './pages/Contato/contato';
import SantaTerezinhaPage from './pages/sobre/santos/terezinha';
import SaoFranciscoPage from './pages/sobre/santos/francisco';
import LeituraDiaria from './pages/liturgiaDiaria/liturgia';
import Eventos from './pages/Eventos/evento';
import Formulario from './forms/inscrição';
import RadioPlayer from './pages/Radio/radio';
import Noticias from './pages/Noticias/Noticias';
import { Fundadores } from './pages/Fundadores/Fundadores';
import AdminDashboard from './admin/dashboard/Dashboard';
import GerenciarConteudos from './admin/Gerenciamento/GerenciarConteudos/GerenciarConteudos';
import CriarAdmin from './admin/Gerenciamento/CadastrarAdministrador/CadastrarAdministrador';
import { AuthProvider } from './context/AuthContext';
import { ProtectLayout } from './services/ProtectLayout';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import AdminForm from './admin/Gerenciamento/GerenciarConteudos/PublicarConteudo';
import ConteudoDetalhes from './pages/Noticias/DetalheConteudo';
import Formacao from './pages/Formacao/formacao';
import PublicarConteudo from './admin/Gerenciamento/GerenciarConteudos/PublicarConteudo';
import GerenciarLiturgia from './admin/Gerenciamento/GerenciarLiturgia/GerenciarLiturgia';
import PublicarEvento from './admin/Gerenciamento/GerenciamentoEventos/PublicarEvento';
import EditarConteudo from './admin/Gerenciamento/GerenciarConteudos/EditarConteudos';
import AdministradorLayout from './admin/layout/AdministradorLayout';
import Login from './admin/Login/login';


const App = () => {
  return (

    <div className="App">
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Layout> <Home /> </Layout>} />
            <Route path='/liturgia-diaria' element={<Layout> <LeituraDiaria /> </Layout>} />
            <Route path='/historia' element={<Layout> <Historia /> </Layout>} />
            <Route path='/noticias' element={<Layout> <Noticias /> </Layout>} />
            <Route path='/doacao' element={<Layout> <DoacoesPage /> </Layout>} />
            <Route path='/fundadores' element={<Layout> <Fundadores /> </Layout>} />
            <Route path='/contato' element={<Layout> <ContactPage /> </Layout>} />
            <Route path='/formacao' element={<Layout> <Formacao /> </Layout>} />
            <Route path='/terezinha' element={<Layout> <SantaTerezinhaPage /> </Layout>} />
            <Route path='/francisco' element={<Layout> <SaoFranciscoPage /> </Layout>} />
            <Route path='/eventos' element={<Layout> <Eventos /> </Layout>} />
            <Route path="/conteudo/:id" element={<Layout> <ConteudoDetalhes /> </Layout>} />
            <Route path='/inscricao' element={<Layout> <Formulario /> </Layout>} />

            <Route path="/radio" element={<Layout> <RadioPlayer /></Layout>} />
            {/* Administrativas */}
            <Route path="/editar-conteudo/:id" element={<AdministradorLayout><ProtectLayout><EditarConteudo /></ProtectLayout></AdministradorLayout>} />
            <Route path="/conteudo" element={<AdministradorLayout><ProtectLayout><PublicarConteudo /></ProtectLayout></AdministradorLayout>} />
            <Route path="/publicarEvento" element={<AdministradorLayout><ProtectLayout><PublicarEvento /></ProtectLayout></AdministradorLayout>} />
            <Route path="/Dashboard" element={<AdministradorLayout><ProtectLayout><AdminDashboard /></ProtectLayout></AdministradorLayout>} />
            <Route path="/CriarAdministrador" element={<AdministradorLayout><ProtectLayout><CriarAdmin /></ProtectLayout></AdministradorLayout>} />
            <Route path="/GerenciarConteudo" element={<AdministradorLayout><ProtectLayout><GerenciarConteudos /></ProtectLayout></AdministradorLayout>} />
            <Route path="/admin/Criar" element={<AdministradorLayout><ProtectLayout><AdminForm /></ProtectLayout></AdministradorLayout>} />
            <Route path="/gerenciarLiturgia" element={<AdministradorLayout><ProtectLayout><GerenciarLiturgia /></ProtectLayout></AdministradorLayout>} />

            <Route path="/login" element={<Login />} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>

  );
};

export default App;
