import api from '../utils/api';

export const authService = {
  login: async (credentials) => {
    try {
      const response = await api.post('/login', credentials);
      console.log("Login Response:", response.data); // Log the response to verify the structure
      const { token, user } = response.data;
      
      // Store token and user details in localStorage
      localStorage.setItem('userToken', token);
      localStorage.setItem('userData', JSON.stringify(user));
      
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  signup: async (userData) => {
    try {
      const response = await api.post('/register', userData);
      return response.data;
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('userData'));
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('userToken');
  }
};