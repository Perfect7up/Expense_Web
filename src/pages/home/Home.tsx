import React from 'react';
import { CheckCircleOutlined, ClockCircleOutlined, ExclamationCircleOutlined, 
  DollarCircleOutlined, FileTextOutlined, PlusOutlined, 
  FileAddOutlined, BarChartOutlined, GlobalOutlined } from '@ant-design/icons';
  import { LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, BarChart as RechartsBarChart, Bar
  } from 'recharts';

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
    { subject: 'Food', employee: 'Mike', team: 'Finace', amount: '€50.00', color: '#1890ff' },
    { subject: 'Travel', employee: 'Emily', team: 'Engineering', amount: '€25.00', color: '#722ed1' },

  ];

  const lineData = [
    { name: 'Jan', value: 8000 },
    { name: 'Feb', value: 5000 },
    { name: 'Mar', value: 7000 },
    { name: 'Apr', value: 3000 },
    { name: 'May', value: 7000 },
    { name: 'Jun', value: 7500 },
  ];

  const barData = [
    { name: 'Business', uv: 8000 },
    { name: 'Comms', uv: 5000 },
    { name: 'Services', uv: 2500 },
    { name: 'Travel', uv: 6780 },
    { name: 'Other', uv: 2700 },
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
                    <span className="ml-2 text-gray-300">{task.title}</span>
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
                    <td className="px-4 py-2 font-semibold text-gray-300">{expense.subject}</td>
                    <td className="px-4 py-2 font-semibold">{expense.employee}</td>
                    <td className="px-4 py-2 font-semibold" style={{ color: expense.color }}>{expense.team}</td>
                    <td className="px-4 py-2 text-right font-semibold">{expense.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-700 rounded-2xl p-4 mb-6 mt-6" style={{ background:'#1b1c1c' }}>
          <h2 className="text-lg font-semibold mb-2 text-white">Quick Access</h2>
          <hr className='bg-gray-700'/>
          <div className="flex flex-wrap ml-8 gap-12 mt-4">
            <button className="flex items-center rounded-lg font-bold py-5 px-5" style={{background:'#3f3f40' }}>
              <PlusOutlined className="mr-2 px-2 py-2 rounded-full bg-purple-700 text-purple-950" />
              New Expense
            </button>
            <button className="flex items-center rounded-lg font-bold py-5 px-5" style={{background:'#3f3f40' }}>
              <FileAddOutlined className="mr-2 py-2 px-2 rounded-full bg-blue-700 text-blue-950" />
              New Receipt
            </button>
            <button className="flex items-center rounded-lg font-bold py-5 px-5" style={{background:'#3f3f40' }}>
              <BarChartOutlined className="mr-2 py-2 px-2 rounded-full bg-red-500 text-red-950" />
              Create Report
            </button>
            <button className="flex items-center rounded-lg font-bold py-5 px-5" style={{background:'#3f3f40' }}>
              <GlobalOutlined className="mr-2 py-2 px-2 rounded-full bg-green-800 text-green-950" />
              Create Trip
            </button>
          </div>
        </div>
        <div className="bg-gray-700 rounded-2xl p-4 mb-6 mt-6" style={{backgroundColor:'#1b1c1c'}}>
        <h2 className='text-lg font-semibold mb-2 text-white'>Monthly Reports</h2>
        <hr />
        <div className="py-2 px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className='bg-gray-700 mt-5' style={{ background:'#1b1c1c' }}>
          <h2 className='text-lg font-semibold mb-4 text-white'>Team Spending Trend</h2>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='value' stroke='#8884d8' activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className='bg-gray-700 mt-5' style={{ background:'#1b1c1c' }}>
          <h2 className='text-lg font-semibold mb-4 text-white'>Day-to-Day Expenses</h2>
          <ResponsiveContainer width='100%' height={300}>
            <RechartsBarChart data={barData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='uv' fill='#82ca9d' />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;