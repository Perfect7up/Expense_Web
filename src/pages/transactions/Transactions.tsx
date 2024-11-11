import React from 'react';
import DataTable from '../../components/DataTable';
import transactionApi from '../../api/transaction.api';
import { useQuery } from '@tanstack/react-query';

interface TransactionData {
  key: string;
  id: number;
  categoryType: string;
  categoryName: string;
  amount: string;
  date: string;
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Category Type',
    dataIndex: 'categoryType',
    key: 'categoryType'
  },
  {
    title: 'Category Name',
    dataIndex: 'categoryName',
    key: 'categoryName'
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount'
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  }
];

const Transactions: React.FC = () => {
  const fetchData = async () => {
    const response = await transactionApi.list();
    return response.data.map((item: any) => ({
      key: item.id.toString(),
      id: item.id,
      categoryType: `${item.categoryType}`, // Replace with actual logic if available
      categoryName: `${item.categoryName}`, // Replace with actual category name if available
      amount: `€${(item.amount / 100).toFixed(2)}`, // Assuming amount is in cents
      date: new Date(item.date * 1000).toLocaleDateString() // Convert Unix timestamp to readable date
    }));
  };

  const { data = [], refetch } = useQuery({
    queryKey: ['transactionList'],
    queryFn: fetchData
  });

  return (
    <div className="bg-primary text-textPrimary">
      <DataTable
        tableName="Transaction"
        columns={columns}
        data={data}
        pageSize={5}
      />
    </div>
  );
};

export default Transactions;
