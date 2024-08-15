import React, { ReactNode } from 'react';


import AdminNavbar from '../componentes/navbar/navbar';

interface LayoutProps {
  children: ReactNode;
}

const AdministradorLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>

      <AdminNavbar />
      {children}

    </div>
  );
};

export default AdministradorLayout;
