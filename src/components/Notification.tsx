import React, { createContext, useContext, ReactNode } from 'react';
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  type: NotificationType;
  message: string;
  description?: string;
  placement?: NotificationArgsProps['placement'];
}

// Define the NotificationContext with a default function
const NotificationContext = createContext<(props: NotificationProps) => void>(() => {
  console.warn('useNotification must be used within a NotificationProvider');
});

// NotificationProvider Component
export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  // Function to open a notification with Ant Design
  const openNotification = ({
    type,
    message,
    description,
    placement = 'topRight'
  }: NotificationProps) => {
    api[type]({
      message,
      description,
      placement
    });
  };

  return (
    <NotificationContext.Provider value={openNotification}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

// Custom Hook
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
