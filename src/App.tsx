import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // For demo purposes, we'll add a function to handle authentication
  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LandingPage onAuthenticate={handleAuthentication} />;
  }

  return <Dashboard />;
}

export default App;