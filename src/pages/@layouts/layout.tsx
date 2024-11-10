import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Navbar';
import Login from '../auth/login';
import Home from '../dashboard/Dashboard';
import Expense from '../transactions/Transactions';
import Trips from '../categories/Categories';
import Approvals from '../approvals/Ledgers';
import NewExpense from '../transactions/Transactions';
import Newtrip from '../categories/component/Newtrip';
import Signup from '../auth/signup';

const Layout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="flex">
      {!isAuthPage && <Sidebar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/expense/newexpense" element={<NewExpense />} />
          <Route path="/trips/newtrip" element={<Newtrip />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
