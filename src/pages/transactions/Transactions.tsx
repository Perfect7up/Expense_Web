import React, { useEffect, useState } from 'react';
import DataTable from '../../components/DataTable';
import transactionApi from '../../api/transaction.api';
import { useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import DraggableModal from '../../components/DragableModal';

interface TransactionData {
  key: string;
  id: number;
  categoryType: string;
  categoryName: string;
  amount: number;
  date: number;
}

interface FormField {
  name: string;
  label: string;
  type: 'input' | 'select' | 'date';
  options?: { label: string; value: string | number }[];
  format?: 'MM-DD-YYYY' | 'DD/MM/YYYY';
}

interface createTransaction {
  amount: number;
  categoryId: number;
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

const formFields: FormField[] = [
  { name: 'amount', label: 'Amount', type: 'input' },
  {
    name: 'categoryId',
    label: 'Category Id',
    type: 'input'
  },
  {
    name: 'date',
    label: 'Date',
    type: 'date',
    format: 'MM-DD-YYYY'
  }
];

const Transactions: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    content: string;
  } | null>(null);

  useEffect(() => {
    if (statusMessage) {
      messageApi[statusMessage.type](statusMessage.content);
      setStatusMessage(null);
    }
  }, [statusMessage, messageApi]);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const response = await transactionApi.list();
    return response.data.map((item: TransactionData) => ({
      key: item.id.toString(),
      id: item.id,
      categoryType: `${item.categoryType}`,
      categoryName: `${item.categoryName}`,
      amount: `€${(item.amount / 100).toFixed(2)}`,
      date: new Date(item.date * 1000).toLocaleDateString()
    }));
  };

  const { data = [], refetch } = useQuery({
    queryKey: ['transactionList'],
    queryFn: fetchData
  });

  const handleTransaction = async (values: createTransaction) => {
    console.log('Values :', values);
    try {
      const response = await transactionApi.create({
        amount: values.amount,
        category_id: values.categoryId,
        date: values.date
      });
      console.log('Response :', response);
      if (response.status >= 200 || response.status <= 299) {
        setOpen(false);
        refetch();
        setStatusMessage({ type: 'success', content: 'Transaction has been recorded.' });
      }
    } catch (error) {
      setStatusMessage({
        type: 'error',
        content: `Transaction has been failed with error ${error}`
      });
      console.log(error);
    }
  };

  return (
    <div>
      {contextHolder}
      <div className="bg-primary text-textPrimary">
        <DataTable
          tableName="Transaction"
          buttons={[{ label: 'Add Transaction', onClick: showModal, type: 'primary' }]}
          columns={columns}
          data={data}
          pageSize={5}
        />
        <DraggableModal
          title={'Add Transaction'}
          description={'Record new transaction'}
          open={open}
          formFields={formFields}
          onOk={handleTransaction}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default Transactions;
