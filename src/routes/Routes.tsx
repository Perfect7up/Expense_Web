import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebsiteLayout from '../website/WebsiteLayout';
import WebsiteHome from '../website/pages/WebsiteHome';
import DashboardLayout from '../layout/DashboardLayout';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../pages/dashboard/Dashboard';
import Transactions from '../pages/transactions/Transactions';
import Categories from '../pages/categories/Categories';

import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';
import Ledgers from '../pages/approvals/Ledgers';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <WebsiteLayout>
              <WebsiteHome />
            </WebsiteLayout>
          }
        />
        <Route path="/sign-in" element={<ProtectedRoute element={<Login />} />} />
        <Route path="/sign-up" element={<ProtectedRoute element={<Signup />} />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <ProtectedRoute element={<Dashboard />} />
            </DashboardLayout>
          }
        />
        <Route
          path="/transactions"
          element={
            <DashboardLayout>
              <ProtectedRoute element={<Transactions />} />
            </DashboardLayout>
          }
        />
        <Route
          path="/categories"
          element={
            <DashboardLayout>
              <ProtectedRoute element={<Categories />} />
            </DashboardLayout>
          }
        />
        <Route
          path="/ledgers"
          element={
            <DashboardLayout>
              <ProtectedRoute element={<Ledgers />} />
            </DashboardLayout>
          }
        />
        <Route
          path="/setting"
          element={
            <DashboardLayout>
              <ProtectedRoute element={<Ledgers />} />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
