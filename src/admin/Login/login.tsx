import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

export default function Login() {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Para indicar o carregamento do submit
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      toast.warning('Preencha os campos de email e senha.');
      return false;
    }
    return true;
  };

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true); // Inicia o carregamento

    try {
      const response = await api.post('/session', { email, password });
      const { token } = response.data;

      if (!token) {
        throw new Error('Token não recebido do servidor');
      }

      setUser(response.data);
      sessionStorage.setItem('@AuthUser:token', JSON.stringify(token));
      toast.success('Bem-vindo');
      navigate('/Dashboard');
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        toast.error('Email/Senha estão incorretos. Por favor, verifique suas credenciais.');
      } else {
        console.error('Erro durante o login:', error);
        toast.error('Erro ao tentar fazer login. Por favor, tente novamente.');
      }
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img
            src="https://github.com/AdsonVicente/ImagensUrlDados/blob/main/logo.png?raw=true"
            alt="Logo Comunidade Católica Ágape"
            className="w-24 h-24"
          />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login - Comunidade Católica Ágape</h2>

        <form onSubmit={signIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Digite seu email"
              autoComplete="email"
              type="email"
              required
              aria-label="Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Senha</label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Digite sua senha"
              autoComplete="current-password"
              type="password"
              required
              aria-label="Senha"
            />
          </div>

          <button
            className={`w-full p-2 rounded ${loading ? 'bg-yellow-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'} text-white transition duration-300 ease-in-out focus:outline-none`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Acessar'}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          <p className="text-sm">
            Esqueceu sua senha? Entre em contato com o administrador para recuperação de conta.
          </p>
        </div>
      </div>
    </div>
  );
}
