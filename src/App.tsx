// App.tsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes/Routes';
import { NotificationProvider } from './components/Notification';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AppRoutes />
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
