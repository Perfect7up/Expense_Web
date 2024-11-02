import { createBrowserRouter } from 'react-router-dom';
import Home from '../home/Home';
import Expense from '../expense/Expense';
import Trips from '../trips/Trips';
import Approvals from '../approvals/Approvals';
import NewExpense from '../expense/component/NewExpense';
import Newtrip from '../trips/component/Newtrip';

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/expense', element: <Expense /> },
  { path: '/trips', element: <Trips /> },
  { path: '/approvals', element: <Approvals /> },
  { path: '/expense/newexpense', element: <NewExpense /> },
  { path: '/trips/newtrip', element: <Newtrip /> }
]);

export default routes;
