import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

export default function Login() {
  const { setUser} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState<string | null>(null);
  const navigate = useNavigate();

  const signIn = async (e: any) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        toast.warning('Preencha os campos de email e senha.');
        return;
      }

      const response = await api.post('/session', { email, password });
      const { token } = response.data;

      if (!token) {
        throw new Error('Token não recebido do servidor');
      }

      // Defina o usuário e salve o token apenas após o sucesso da autenticação
      setUser(response.data);
      sessionStorage.setItem('@AuthUser:token', JSON.stringify(token));
      toast.success('Bem-vindo');

      // Navegação para o Dashboard após o login bem-sucedido
      navigate('/Dashboard');
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        toast.error('Email/Senha estão incorretos. Por favor, verifique suas credenciais.');
      } else {
        console.error('Erro durante o login:', error);
        toast.error('Erro ao tentar fazer login. Por favor, tente novamente.');
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-yellow-500 to-red-400 flex items-center justify-center min-h-screen"> 
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={'https://github.com/AdsonVicente/ImagensUrlDados/blob/main/logo.png?raw=true'} alt="Logo Comunidade Católica Ágape" className="w-24 h-24" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login - Comunidade Católica Ágape</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={signIn}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 w-full border rounded"
            placeholder="Digite seu email"
            autoComplete="email"
            type="email"
            required
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 w-full border rounded"
            placeholder="Digite sua senha"
            autoComplete="current-password"
            type="password"
            required
          />

          <button
            className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
            type="submit"
          >
            Acessar
          </button>
        </form>
      </div>
    </div>
  );
}
