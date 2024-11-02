import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Expense from './pages/expense/Expense';
import Trips from './pages/trips/Trips';
import Approvals from './pages/approvals/Approvals';
import NewExpense from './pages/expense/component/NewExpense';
import Newtrip from './pages/trips/component/Newtrip';



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
              <Route path='/expense/newexpense' element={<NewExpense />} />
              <Route path='/trips/newtrip' element={<Newtrip />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;