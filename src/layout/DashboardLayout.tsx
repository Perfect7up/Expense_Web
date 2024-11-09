// DashboardLayout.tsx
import React, { ReactNode } from "react";
import Sidebar from "../components/sidebar/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => (
  <div className="dashboard-layout flex">
    <Sidebar />
    <div className="flex-1 p-4">{children}</div>
  </div>
);

export default DashboardLayout;
