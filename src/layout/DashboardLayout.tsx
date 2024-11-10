// DashboardLayout.tsx
import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => (
  <div className="dashboard-layout flex">
    <Navbar />
    <div className="flex-1 mt-14 p-4">{children}</div>
  </div>
);

export default DashboardLayout;
