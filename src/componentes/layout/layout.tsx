import React, { ReactNode } from 'react';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar';
import Example from '../../bandeiras/bandeira'; // Importe o componente Example
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Example></Example>
      <Navbar/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
