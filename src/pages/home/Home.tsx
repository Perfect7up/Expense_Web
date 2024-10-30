import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";


export default function HomePage() {
    const tasks = [
        { title: 'Pending Approvals', count: 5 },
        { title: 'New Trips Registered', count: 3 },
      ];
      const expenses = [
        { subject: 'Office Supplies', employee: 'John Smith', team: 'Marketing', amount: '€100.00' },
        { subject: 'Business Lunch', employee: 'Sarah Judd', team: 'Marketing', amount: '€75.60' },
        // ... other expenses
      ];
  return (
    <div className="flex py-10 px-5">
      <Sidebar />
      <main className="flex-1 p-6 bg-black ml-64">
      <div className="bg-gray-700 p-4 rounded-md w-50">
      <h2 className="text-lg font-semibold mb-2">Pending Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{task.title}</span>
            <span>{task.count}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-gray-700 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Recent Expenses</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Subject</th>
            <th className="text-left">Employee</th>
            <th className="text-left">Team</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td className="py-2">{expense.subject}</td>
              <td className="py-2">{expense.employee}</td>
              <td className="py-2">{expense.team}</td>
              <td className="py-2 text-right">{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </main>
    </div>
  );
}