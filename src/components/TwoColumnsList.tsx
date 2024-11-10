// TwoColumnList.tsx
import React from 'react';
import { Card, List, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface CardContent {
  id: number;
  content: string;
  buttonsDisabled?: boolean;
}

interface CardData {
  title: string;
  contents: CardContent[];
}

interface TwoColumnListProps {
  type1Data: CardData[];
  type2Data: CardData[];
  type1ButtonsEnabled?: boolean;
  type2ButtonsEnabled?: boolean;
  onEdit?: (id: number, content: string) => void;
  onDelete?: (id: number, content: string) => void;
}

const TwoColumnList: React.FC<TwoColumnListProps> = ({
  type1Data,
  type2Data,
  type1ButtonsEnabled = false,
  type2ButtonsEnabled = false,
  onEdit,
  onDelete
}) => {
  const renderContentItem = (content: CardContent, buttonsEnabled: boolean) => (
    <div
      key={content.id}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      }}
    >
      <span>
        {content.id}: {content.content}
      </span>
      {buttonsEnabled && !content.buttonsDisabled && (
        <Space>
          {onEdit && (
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() => onEdit(content.id, content.content)}
              style={{ padding: 0 }}
            />
          )}
          {onDelete && (
            <Button
              type="link"
              icon={<DeleteOutlined />}
              onClick={() => onDelete(content.id, content.content)}
              style={{ padding: 0 }}
            />
          )}
        </Space>
      )}
    </div>
  );

  const renderCard = (data: CardData[], buttonsEnabled: boolean) => (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title}>
            {item.contents.map((content) => renderContentItem(content, buttonsEnabled))}
          </Card>
        </List.Item>
      )}
    />
  );

  return (
    <div style={{ display: 'flex', gap: '16px', padding: '16px' }}>
      {/* Left Column for Type 1 Cards */}
      <div style={{ flex: 1 }}>{renderCard(type1Data, type1ButtonsEnabled)}</div>

      {/* Separator */}
      <div style={{ width: '2px', backgroundColor: '#e8e8e8' }} />

      {/* Right Column for Type 2 Cards */}
      <div style={{ flex: 1 }}>{renderCard(type2Data, type2ButtonsEnabled)}</div>
    </div>
  );
};

export default TwoColumnList;
