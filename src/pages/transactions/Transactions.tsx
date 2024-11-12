import React, { useEffect, useState } from 'react';
import DataTable from '../../components/DataTable';
import transactionApi from '../../api/transaction.api';
import { useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import DraggableModal from '../../components/DragableModal';
import categoryApi from '../../api/category.api';

interface TransactionData {
  key: string;
  id: number;
  categoryType: string;
  categoryName: string;
  amount: number;
  date: number;
}

interface Category {
  id: number;
  type: string;
  name: string;
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

  const fetchCategories = async (): Promise<Category[]> => {
    try {
      const response = await categoryApi.list();
      return response.data;
    } catch (error) {
      console.log('Error:', error);
      return [];
    }
  };

  const { data: categoriesList = [] } = useQuery<Category[]>({
    queryKey: ['categoryList'],
    queryFn: fetchCategories
  });

  const { data = [], refetch } = useQuery({
    queryKey: ['transactionList'],
    queryFn: fetchData
  });

  const handleTransaction = async (values: createTransaction) => {
    try {
      const response = await transactionApi.create({
        amount: values.amount,
        category_id: values.categoryId,
        date: new Date(values.date).toLocaleDateString()
      });
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

  const formFields: FormField[] = [
    { name: 'amount', label: 'Amount', type: 'input' },
    {
      name: 'categoryId',
      label: 'Category Id',
      type: 'select',
      options: categoriesList.map((category) => ({ label: category.name, value: category.id }))
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      format: 'MM-DD-YYYY'
    }
  ];

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
          rowButtons={[
            {
              label: 'Delete',
              onClick: (record) => console.log('Deleting', record),
              type: 'primary',
              danger: true
            }
          ]}
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
