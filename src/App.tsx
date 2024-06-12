import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Layout from './componentes/layout/layout';
import 'tailwindcss/tailwind.css';
import History from './pages/Comunidade/History/Historia';
import Login from './componentes/admin/Login/login';
import DoacoesPage from './pages/Doação/doacao';
import ContactPage from './pages/Contato/contato';
import FormationPage from './pages/Formacao/formacao';
import SantaTerezinhaPage from './pages/Comunidade/History/santos/terezinha';
import SaoFranciscoPage from './pages/Comunidade/History/santos/francisco';
import LeituraDiaria from './pages/Liturgy/liturgia';
import Eventos from './pages/Comunidade/Eventos/evento';
import Formulario from './forms/inscrição';
import NewsDetailPage from './pages/Noticias/detailsNews';
import { NewsProvider } from './context/NewContext';
import EventDetailPage from './pages/Comunidade/Eventos/EventoDetalhes';
import RadioPlayer from './pages/Radio/radio';
import AdminLayout from './componentes/admin/Layout/AdminLayout';
import Dashboard from './componentes/admin/Dashboard/Dashboard';
import Users from './componentes/admin/Usuarios/Usuarios';
import Settings from './componentes/admin/Configuracoes/Configuracoes';
import Noticias from './pages/Noticias/Noticias';
import { Fundadores } from './pages/Comunidade/Fundadores/Fundadores';


const App = () => {
  return (

    <div className="App">

      <BrowserRouter>
        <NewsProvider>
          <Routes>

            <Route path='/' element={<Layout><Home /></Layout>} />
            <Route path='/liturgia-diaria' element={<Layout><LeituraDiaria /></Layout>} />
            <Route path='/Historia' element={<Layout><History /></Layout>} />

            <Route path='/Noticias' element={<Layout><Noticias /></Layout>} />
            <Route path='/Doacao' element={<Layout><DoacoesPage /></Layout>} />
            <Route path='/Fundadores' element={<Layout><Fundadores /></Layout>} />
            <Route path='/Contato' element={<Layout><ContactPage /></Layout>} />
            <Route path='/Formacao' element={<Layout><FormationPage /></Layout>} />
            <Route path='/Terezinha' element={<Layout><SantaTerezinhaPage /></Layout>} />
            <Route path='/Francisco' element={<Layout><SaoFranciscoPage /></Layout>} />
            <Route path='/Eventos' element={<Layout><Eventos /></Layout>} />
            <Route path="/Noticias/:id" element={<Layout><NewsDetailPage /></Layout>} />
            <Route path='/Formulario' element={<Layout><Formulario /></Layout>} />
            <Route path="/Eventos/:id" element={<Layout><EventDetailPage /></Layout>} />
            <Route path="/Radio" element={<Layout><RadioPlayer /></Layout>} />

            {/* administrativas */}
            <Route path="/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<AdminLayout> <Dashboard /> </AdminLayout>} />
            <Route path="/admin/users" element={<AdminLayout> <Users /> </AdminLayout>} />
            <Route path="/admin/settings" element={<AdminLayout> <Settings /> </AdminLayout>} />
            <Route path="/admin/Noticias" element={<AdminLayout> <Noticias /> </AdminLayout>} />

          </Routes>

        </NewsProvider>
      </BrowserRouter>
    </div>

  );
};

export default App;
