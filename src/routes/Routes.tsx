import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebsiteLayout from '../website/WebsiteLayout';
import WebsiteHome from '../website/pages/WebsiteHome';
import DashboardLayout from '../layout/DashboardLayout';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/home/Home';
import Expense from '../pages/expense/Expense';
import Trips from '../pages/trips/Trips';
import Approvals from '../pages/approvals/Approvals';
import NewExpense from '../pages/expense/Expense';
import Newtrip from '../pages/trips/component/Newtrip';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';

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
        <Route path="/auth/login" element={<ProtectedRoute element={<Login />} />} />
        <Route path="/auth/gettingstarted" element={<ProtectedRoute element={<Signup />} />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <ProtectedRoute element={<Home />} />
            </DashboardLayout>
          }
        />
        <Route
          path="/expense"
          element={
            <DashboardLayout>
              <ProtectedRoute element={<Expense />} />
            </DashboardLayout>
          }
        />
        <Route
          path="/trips"
          element={
            <DashboardLayout>
              <ProtectedRoute element={<Trips />} />
            </DashboardLayout>
          }
        />
        <Route
          path="/approvals"
          element={
            <DashboardLayout>
              <ProtectedRoute element={<Approvals />} />
            </DashboardLayout>
          }
        />
        <Route
          path="/expense/newexpense"
          element={
            <DashboardLayout>
              <ProtectedRoute element={<NewExpense />} />
            </DashboardLayout>
          }
        />
        <Route
          path="/trips/newtrip"
          element={
            <DashboardLayout>
              <ProtectedRoute element={<Newtrip />} />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
