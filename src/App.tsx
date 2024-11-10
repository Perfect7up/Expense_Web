// App.tsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes/Routes';
import { NotificationProvider } from './components/Notification';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <NotificationProvider>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
