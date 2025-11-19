import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './presentation/routes/AppRouter';
import { AuthShellProvider } from './presentation/context/AuthShellContext';
import ErrorBoundary from './presentation/components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <AuthShellProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ErrorBoundary>
    </AuthShellProvider>
    
  );
}

export default App;
