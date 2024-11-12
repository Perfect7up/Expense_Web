import React from 'react';
import { Card, List, Button, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

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
        padding: '8px 0',
        borderBottom: '1px solid #f0f0f0'
      }}
    >
      <Text style={{ color: '#595959' }}>
        {content.id}: {content.content}
      </Text>
      {buttonsEnabled && !content.buttonsDisabled && (
        <Space size="middle">
          {onEdit && (
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() => onEdit(content.id, content.content)}
              style={{ color: '#1890ff' }}
            />
          )}
          {onDelete && (
            <Button
              type="link"
              icon={<DeleteOutlined />}
              onClick={() => onDelete(content.id, content.content)}
              style={{ color: '#ff4d4f' }}
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
          <Card
            title={
              <Title level={4} style={{ margin: 0 }}>
                {item.title}
              </Title>
            }
            bordered
            hoverable
            style={{
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}
            bodyStyle={{ padding: '16px' }}
          >
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
