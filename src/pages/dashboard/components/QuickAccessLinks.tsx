import { PlusOutlined, FileAddOutlined, BarChartOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const QuickAccessLinks = () => (
  <div className="flex flex-wrap ml-8 gap-12 mt-4">
    <Link
      to="/expense/newexpense"
      className="flex items-center rounded-lg font-bold py-4 px-4 bg-primary"
    >
      <PlusOutlined className="mr-2 px-2 py-2 rounded-full bg-purple-700 text-purple-950" />
      New Expense
    </Link>
    <button className="flex items-center rounded-lg font-bold py-4 px-4 bg-primary">
      <FileAddOutlined className="mr-2 py-2 px-2 rounded-full bg-blue-700 text-blue-950" />
      New Receipt
    </button>
    <button className="flex items-center rounded-lg font-bold py-4 px-4 bg-primary">
      <BarChartOutlined className="mr-2 py-2 px-2 rounded-full bg-red-500 text-red-950" />
      Create Report
    </button>
    <Link
      to="/trips/newtrip"
      className="flex items-center rounded-lg font-bold py-4 px-4 bg-primary"
    >
      <GlobalOutlined className="mr-2 py-2 px-2 rounded-full bg-green-800 text-green-950" />
      Create Trip
    </Link>
  </div>
);

export default QuickAccessLinks;
