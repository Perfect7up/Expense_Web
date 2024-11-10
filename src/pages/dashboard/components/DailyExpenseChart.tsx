// DailyExpenseChart.tsx
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const barData = [
  { name: 'Business', uv: 8000 },
  { name: 'Comms', uv: 5000 },
  { name: 'Services', uv: 2500 },
  { name: 'Travel', uv: 6780 },
  { name: 'Other', uv: 2700 }
];

const DailyExpenseChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={barData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default DailyExpenseChart;
