import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Remova Router do import
import Home from './pages/Home/home';
import Layout from './componentes/layout/layout';
import LiturgiaDiaria from './pages/Liturgy/liturgia';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Home/></Layout>}/>
          <Route path='/liturgia-diaria' element={<Layout><LiturgiaDiaria/></Layout>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
