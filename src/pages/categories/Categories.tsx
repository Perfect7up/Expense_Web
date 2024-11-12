import React, { useEffect, useMemo, useState } from 'react';
import { Button, message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import categoryApi from '../../api/category.api';
import TwoColumnList from '../../components/TwoColumnsList';
import DraggableModal from '../../components/DragableModal';

interface Category {
  id: number;
  type: string;
  name: string;
}

interface FormField {
  name: string;
  label: string;
  type: 'input' | 'select';
  options?: { label: string; value: string | number }[];
}

const formFields: FormField[] = [
  { name: 'name', label: 'Name', type: 'input' },
  {
    name: 'type',
    label: 'Type',
    type: 'select',
    options: [
      { label: 'Income', value: 'income' },
      { label: 'Expense', value: 'expense' }
    ]
  }
];

const Categories: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
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
    setEditingCategory(null);
    setOpen(true);
  };

  const handleOk = async (values: Record<string, any>) => {
    try {
      if (editingCategory) {
        const response = await categoryApi.update(editingCategory.id, {
          name: values.name,
          type: values.type
        });
        if (response.status >= 200 && response.status < 300) {
          setStatusMessage({
            type: 'success',
            content: `Category ${editingCategory.name} has been updated.`
          });
          refetch();
        }
      } else {
        // Create new category
        const response = await categoryApi.create({ name: values.name, type: values.type });
        if (response.status >= 200 && response.status < 300) {
          setStatusMessage({ type: 'success', content: response.data.message });
          refetch();
        }
      }
      setOpen(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? (error as any).response?.data?.message : 'Unknown error';
      setStatusMessage({ type: 'error', content: errorMessage });
    }
  };

  const handleCancel = () => {
    setOpen(false);
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

  const { data: categories = [], refetch } = useQuery<Category[]>({
    queryKey: ['categoryList'],
    queryFn: fetchCategories
  });

  const { incomeCategories, expenseCategories } = useMemo(() => {
    const incomeCategories = categories
      .filter((category: Category) => category.type === 'income')
      .map((category: Category) => ({ id: category.id, content: category.name }));

    const expenseCategories = categories
      .filter((category: Category) => category.type === 'expense')
      .map((category: Category) => ({ id: category.id, content: category.name }));

    return {
      incomeCategories,
      expenseCategories
    };
  }, [categories]);

  const income = [
    {
      title: 'Income Categories',
      contents: incomeCategories
    }
  ];

  const expense = [
    {
      title: 'Expense Categories',
      contents: expenseCategories
    }
  ];

  const handleEdit = (id: number) => {
    const category = categories.find((cat) => cat.id === id);
    if (category) {
      setEditingCategory(category);
      setOpen(true);
    }
  };

  return (
    <div>
      {contextHolder}
      <div className="text-center">
        <Button type="primary" onClick={showModal}>
          Add Category
        </Button>
      </div>
      <TwoColumnList
        type1Data={income}
        type2Data={expense}
        type1ButtonsEnabled={true}
        type2ButtonsEnabled={true}
        onEdit={handleEdit}
        onDelete={(id, content) => console.log(`Delete ${content} (ID: ${id})`)}
      />
      <DraggableModal
        title={editingCategory ? 'Edit Category' : 'Add Category'}
        description={
          editingCategory ? 'Edit the category details' : 'Fill the details to add new category'
        }
        open={open}
        formFields={formFields}
        initialValues={
          editingCategory ? { name: editingCategory.name, type: editingCategory.type } : undefined
        }
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Categories;
