// App.tsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes/Routes';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
