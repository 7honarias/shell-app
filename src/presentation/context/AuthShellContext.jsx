import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Crear el Contexto
const AuthShellContext = createContext(null);

export const useAuthShell = () => {
  return useContext(AuthShellContext);
};

export const AuthShellProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  
  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem('accessToken');
      
      if (token) {
        // 💡 Mejor práctica: idealmente, aquí harías una llamada API 
        // a un endpoint '/validate-token' o '/user-info' 
        // para verificar que el token no ha expirado o ha sido revocado.
        // Por simplicidad, asumiremos que si existe, es válido temporalmente.
        
        // Verifica la validez del token aquí (p. ej., expiración local o fetch)
        // ... (Lógica de verificación más profunda)
        
        setIsAuthenticated(true);
      }
      
      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  const setAuthenticated = (value) => {
    setIsAuthenticated(value);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expiresIn');

    setIsAuthenticated(false);
  };
  
  const contextValue = {
    isAuthenticated,
    isLoading,
    setAuthenticated,
    logout,
  };

  if (isLoading) {
    return <div>Cargando sesión...</div>; 
  }

  return (
    <AuthShellContext.Provider value={contextValue}>
      {children}
    </AuthShellContext.Provider>
  );
};