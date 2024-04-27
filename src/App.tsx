import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Layout from './componentes/layout/layout';
import LiturgiaDiaria from './pages/Liturgy/liturgia';
import 'tailwindcss/tailwind.css';
import History from './pages/Comunidade/History/history';
import Login from './pages/Login/login';
import News from './pages/News/news';
import DoacoesPage from './pages/Doação/doacao';
import Fundador from './pages/Comunidade/Fundador/founder';
import ContactPage from './componentes/Contato/contato';
import FormationPage from './componentes/Formacao/formacao';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Home/></Layout>}/>
          <Route path='/liturgia-diaria' element={<Layout><LiturgiaDiaria/></Layout>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/history' element={<Layout><History/></Layout>}/>
          <Route path='/admin' element={<Login/>}/>
          <Route path='/news' element={<Layout><News/></Layout>}/>
          <Route path='/doacao' element={<Layout><DoacoesPage/></Layout>}/>
          <Route path='/fundador' element={<Layout><Fundador/></Layout>}/>
          <Route path='/contato' element={<Layout><ContactPage/></Layout>}/>
          <Route path='/formacao' element={<Layout><FormationPage/></Layout>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
