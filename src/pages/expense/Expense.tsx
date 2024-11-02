// Expense.tsx
import React from 'react';
import { Table, Tag } from 'antd';
import { PlusOutlined, FilterFilled, MenuOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {
  FaMoneyBillWave,
  FaStore,
  FaCalendarAlt,
  FaCheckCircle,
  FaUtensils,
  FaShoppingCart,
  FaInfoCircle,
  FaNewspaper,
  FaPlane,
  FaGlassCheers,
  FaHotel
} from 'react-icons/fa';

interface ExpenseData {
  key: string;
  details: JSX.Element;
  merchant: string;
  amount: string;
  reportDate: string;
  status: string;
}

const Expense: React.FC = () => {
  // Table columns definition
  const columns = [
    {
      title: (
        <>
          <FaInfoCircle className="inline-block mr-1" /> Details
        </>
      ),
      dataIndex: 'details',
      key: 'details'
    },
    {
      title: (
        <>
          <FaStore className="inline-block mr-1" /> Merchant
        </>
      ),
      dataIndex: 'merchant',
      key: 'merchant'
    },
    {
      title: (
        <>
          <FaMoneyBillWave className="inline-block mr-1" /> Amount
        </>
      ),
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: (
        <>
          <FaCalendarAlt className="inline-block mr-1" /> Report Date
        </>
      ),
      dataIndex: 'reportDate',
      key: 'reportDate'
    },
    {
      title: (
        <>
          <FaCheckCircle className="inline-block mr-1" /> Status
        </>
      ),
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Submitted' ? 'blue' : 'volcano'}>{status}</Tag>
      )
    }
  ];

  // Table data definition
  const data: ExpenseData[] = [
    {
      key: '1',
      details: (
        <>
          <FaUtensils className="mr-2" /> Food Catering
        </>
      ),
      merchant: 'McFood',
      amount: '€250.00',
      reportDate: '20/07/2022',
      status: 'Not Submitted'
    },
    {
      key: '2',
      details: (
        <>
          <FaShoppingCart className="mr-2" /> Shopping
        </>
      ),
      merchant: 'Mart',
      amount: '€150.00',
      reportDate: '4/07/2022',
      status: 'Not Submitted'
    },
    {
      key: '3',
      details: (
        <>
          <FaUtensils className="mr-2" /> Business Lunch
        </>
      ),
      merchant: 'Restaurant',
      amount: '€70.00',
      reportDate: '3/07/2022',
      status: 'Not Submitted'
    },
    {
      key: '4',
      details: (
        <>
          <FaPlane className="mr-2" /> Travel Expense
        </>
      ),
      merchant: 'Airlines',
      amount: '€450.25',
      reportDate: '29/06/2022',
      status: 'Submitted'
    },
    {
      key: '5',
      details: (
        <>
          <FaGlassCheers className="mr-2" /> Client Dinner
        </>
      ),
      merchant: 'Bistro',
      amount: '€120.00',
      reportDate: '15/06/2022',
      status: 'Not Submitted'
    },
    {
      key: '6',
      details: (
        <>
          <FaHotel className="mr-2" /> Accommodations
        </>
      ),
      merchant: 'Hotel',
      amount: '€275.75',
      reportDate: '30/05/2022',
      status: 'Submitted'
    },
    {
      key: '7',
      details: (
        <>
          <FaNewspaper className="mr-2" /> News Subscription
        </>
      ),
      merchant: 'NewsTimes',
      amount: '€275.75',
      reportDate: '30/05/2022',
      status: 'Not Submitted'
    }
  ];

  return (
    <div className="bg-primary text-textPrimary">
      <div className="flex-grow ml-5 mr-5 px-5 py-5 rounded-2xl bg-secondary">
        <div className="flex mb-5 justify-between">
          <h2 className="font-semibold mt-5 text-2xl">Expense</h2>
          <div className="flex mt-5 items-center">
            <Link
              to="/expense/newexpense"
              className="bg-cyan-400 rounded-sm m-2 items-center py-1 px-3 text-sm text-white"
            >
              <PlusOutlined className="text-sm m-1" />
              New Expense
            </Link>
            <FilterFilled className="text-cyan-400 mr-4" />
            <MenuOutlined className="text-cyan-400 mr-4" />
            <EllipsisOutlined className="text-cyan-400 mr-4" />
          </div>
        </div>
        <hr className="text-black" />

        {/* Expense Table */}
        <div className="mt-5">
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
      </div>
    </div>
  );
};

export default Expense;
