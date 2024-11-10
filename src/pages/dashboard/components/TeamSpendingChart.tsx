// TeamSpendingChart.tsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const lineData = [
  { name: 'Jan', value: 8000 },
  { name: 'Feb', value: 5000 },
  { name: 'Mar', value: 7000 },
  { name: 'Apr', value: 3000 },
  { name: 'May', value: 7000 },
  { name: 'Jun', value: 7500 }
];

const TeamSpendingChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={lineData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

export default TeamSpendingChart;
