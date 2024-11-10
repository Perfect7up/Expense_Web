import React from 'react';
import TaskList from './components/TaskList';
import ExpenseTable from './components/ExpenseTable';
import QuickAccessLinks from './components/QuickAccessLinks';
import TeamSpendingChart from './components/TeamSpendingChart';
import DailyExpenseChart from './components/DailyExpenseChart';

const Dashboard: React.FC = () => (
  <div className="flex flex-col items-center justify-center bg-primary text-textPrimary">
    <div className="flex-grow ml-2 py-2 px-2 rounded-2xl bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TaskList />
        <ExpenseTable />
      </div>

      <div className="rounded-2xl p-4 mb-6 mt-6">
        <h2 className="text-lg font-semibold mb-2">Quick Access</h2>
        <hr className="border-textSecondary" />
        <QuickAccessLinks />
      </div>

      <div className="rounded-2xl p-4 mb-6 mt-6">
        <h2 className="text-lg font-semibold mb-2">Monthly Reports</h2>
        <hr className="border-textSecondary" />
        <div className="py-2 px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mt-5">
              <h2 className="text-lg font-semibold mb-4">Team Spending Trend</h2>
              <TeamSpendingChart />
            </div>
            <div className="mt-5">
              <h2 className="text-lg font-semibold mb-4">Day-to-Day Expenses</h2>
              <DailyExpenseChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
