import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Expense from './pages/expense/Expense';
import Trips from './pages/trips/Trips';
import Approvals from './pages/approvals/Approvals';
import Settings from './pages/settings/Settings';
import Support from './pages/support/Support';
import NewExpense from './pages/expense/component/NewExpense';



const App: React.FC = () => {
  return (
    <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/expense' element={<Expense />} />
              <Route path='/trips' element={<Trips />} />
              <Route path='/approvals' element={<Approvals />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/support' element={<Support />} />
              <Route path='/expense/newexpense' element={<NewExpense />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;