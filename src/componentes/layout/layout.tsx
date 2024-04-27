import React, { ReactNode } from 'react';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
