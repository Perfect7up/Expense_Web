import React from 'react';
import { CheckCircleOutlined, ClockCircleOutlined, ExclamationCircleOutlined, DollarCircleOutlined, FileTextOutlined } from '@ant-design/icons';

const Home: React.FC = () => {
  const tasks = [
    { title: 'Pending Approvals', count: 5, icon: <CheckCircleOutlined style={{ color: '#52c41a' }} /> },
    { title: 'New Trips Registered', count: 1, icon: <ClockCircleOutlined style={{ color: '#faad14' }} /> },
    { title: 'Unreported Expenses', count: 4, icon: <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} /> },
    { title: 'Upcoming Expenses', count: 0, icon: <DollarCircleOutlined style={{ color: '#1890ff' }} /> },
    { title: 'Unreported Advances', count: '€51.00', icon: <FileTextOutlined style={{ color: '#722ed1' }} /> }
  ];

  const expenses = [
    { subject: 'Office', employee: 'John', team: 'Marketing', amount: '€100.00', color: '#52c41a' },
    { subject: 'Business', employee: 'Sarah', team: 'Sales', amount: '€75.60', color: '#faad14' },
    { subject: 'Travel', employee: 'Mike', team: 'Operations', amount: '€450.25', color: '#ff4d4f'},
    { subject: 'Client', employee: 'Jennifer', team: 'Finance', amount: "€120.00", color: '#722ed1' },
  ];

  return (
    <div className='py-10 px-10'>
      <div className="flex-grow ml-64 py-10 rounded-2xl bg-black px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 bg-primary rounded-md" style={{ background:'#1b1c1c' }}>
            <h2 className="text-lg font-semibold mb-2 text-white">Pending Tasks</h2>
            <hr />
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="flex justify-between py-2 font-semibold text-white">
                  <span className="flex items-center px-2">
                    {task.icon}
                    <span className="ml-2">{task.title}</span>
                  </span>
                  <span className="px-2">{task.count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-700 p-4 rounded-md" style={{ background:'#1b1c1c' }}>
            <h2 className="text-lg font-semibold mb-2 text-white">Recent Expenses</h2>
            <hr />
            <table className="w-full text-white">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2">Subject</th>
                  <th className="text-left px-4 py-2">Employee</th>
                  <th className="text-left px-4 py-2">Team</th>
                  <th className="text-right px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{expense.subject}</td>
                    <td className="px-4 py-2">{expense.employee}</td>
                    <td className="px-4 py-2" style={{ color: expense.color }}>{expense.team}</td>
                    <td className="px-4 py-2 text-right">{expense.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="" style={{ backgroundColor: '#1b1c1c'}}></div>
      </div>
    </div>
  );
};

export default Home;