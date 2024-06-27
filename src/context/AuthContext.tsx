import { createContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
export const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const logout = () => {
    console.log('logout');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
      }}>
      <>{children}</>
    </AuthContext.Provider>
  )
};