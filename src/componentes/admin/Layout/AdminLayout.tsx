import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar'; // Ajuste o caminho conforme necessário

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
