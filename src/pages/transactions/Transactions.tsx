// Expense.tsx
import React from 'react';
import { Tag } from 'antd';
import { PlusOutlined, FilterFilled, MenuOutlined, EllipsisOutlined } from '@ant-design/icons';

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
import DataTable from '../../components/DataTable';

interface ExpenseData {
  key: string;
  details: JSX.Element;
  merchant: string;
  amount: string;
  reportDate: string;
  status: string;
}

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

const Transactions: React.FC = () => {
  // const fetchData = async () => {
  //   try {
  //     const response = await
  //   } catch (error) {

  //   }
  // }

  const buttons = [
    <span key="add-expense">
      <PlusOutlined className="text-sm" />
      New Transaction
    </span>,
    <FilterFilled key="filter" />,
    <MenuOutlined key="menu" />,
    <EllipsisOutlined key="more-options" />
  ];

  return (
    <div className="bg-primary text-textPrimary">
      <DataTable
        tableName="Transaction"
        buttons={buttons}
        columns={columns}
        data={data}
        pageSize={5}
      />
    </div>
  );
};

export default Transactions;
