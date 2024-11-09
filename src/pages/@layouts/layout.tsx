import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Login from '../auth/login';
import Home from '../home/Home';
import Expense from '../expense/Expense';
import Trips from '../trips/Trips';
import Approvals from '../approvals/Approvals';
import NewExpense from '../expense/Expense';
import Newtrip from '../trips/component/Newtrip';
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
