import React from 'react';
import { Table, Button } from 'antd';

interface ButtonConfig {
  label: string;
  onClick: (record: any) => void;
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  danger?: boolean;
  disabled?: boolean;
}

interface DataTableProps {
  tableName: string;
  buttons?: ButtonConfig[];
  columns: any[];
  data: any[];
  pageSize: number;
  rowButtons?: ButtonConfig[];
}

const DataTable: React.FC<DataTableProps> = ({
  tableName,
  buttons,
  columns,
  data,
  pageSize,
  rowButtons
}) => {
  // Add a column for row-specific buttons if rowButtons is provided
  const extendedColumns = rowButtons
    ? [
        ...columns,
        {
          title: 'Actions',
          key: 'actions',
          render: (text: any, record: any) => (
            <div className="flex space-x-2">
              {rowButtons.map((buttonConfig, index) => (
                <Button
                  key={index}
                  onClick={() => buttonConfig.onClick(record)}
                  type={buttonConfig.type}
                  danger={buttonConfig.danger}
                  disabled={buttonConfig.disabled}
                  className="bg-cyan-400 rounded-sm text-white"
                >
                  {buttonConfig.label}
                </Button>
              ))}
            </div>
          )
        }
      ]
    : columns;

  return (
    <div className="bg-primary text-textPrimary">
      <div className="flex-grow ml-5 mr-5 px-5 py-5 rounded-2xl bg-secondary">
        <div className="flex mb-5 justify-between">
          <h2 className="font-semibold mt-5 text-2xl">{tableName}</h2>
          <div className="flex mt-5 items-end">
            {buttons?.map((buttonConfig, index) => (
              <Button
                key={index}
                onClick={buttonConfig.onClick}
                type={buttonConfig.type}
                danger={buttonConfig.danger}
                disabled={buttonConfig.disabled}
                className="bg-cyan-400 rounded-sm m-2 items-center py-1 px-3 text-sm text-white"
              >
                {buttonConfig.label}
              </Button>
            ))}
          </div>
        </div>
        <hr className="text-black" />

        <div className="mt-5">
          <Table columns={extendedColumns} dataSource={data} pagination={{ pageSize }} />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
