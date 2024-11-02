const ExpenseTable = () => {
  const expenses = [
    { subject: 'Office', employee: 'John', team: 'Marketing', amount: '€100.00', color: '#52c41a' },
    { subject: 'Business', employee: 'Sarah', team: 'Sales', amount: '€75.60', color: '#faad14' },
    { subject: 'Food', employee: 'Mike', team: 'Finance', amount: '€50.00', color: '#1890ff' },
    {
      subject: 'Travel',
      employee: 'Emily',
      team: 'Engineering',
      amount: '€25.00',
      color: '#722ed1'
    }
  ];

  return (
    <div className="bg-primary p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2 text-textPrimary">Recent Expenses</h2>
      <hr className="border-textSecondary" />
      <table className="w-full text-textPrimary">
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
              <td className="px-4 py-2 font-semibold text-gray-800">{expense.subject}</td>
              <td className="px-4 py-2 font-semibold">{expense.employee}</td>
              <td className="px-4 py-2 font-semibold" style={{ color: expense.color }}>
                {expense.team}
              </td>
              <td className="px-4 py-2 text-right font-semibold">{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
