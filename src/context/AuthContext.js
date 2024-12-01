import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Use authService to check authentication
    if (authService.isAuthenticated()) {
      const userData = authService.getCurrentUser(); // Get user data from localStorage
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (credentials) => {
    try {
      const userData = await authService.login(credentials);
      setUser(userData.user);
      setIsAuthenticated(true);
      return userData;
    } catch (error) {
      setIsAuthenticated(false);
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
