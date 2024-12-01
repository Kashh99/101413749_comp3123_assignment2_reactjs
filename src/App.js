import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; // Import useAuth
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Layout/Navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import EmployeeList from './components/Employee/EmployeeList';
import EmployeeForm from './components/Employee/EmployeeForm';
import EmployeeDetails from './components/Employee/EmployeeDetails';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar />
            <div className="container mx-auto px-4 py-6">
              <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
                {/* Protected Routes */}
                <Route path="/employees" element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
                <Route path="/employees/new" element={<PrivateRoute><EmployeeForm /></PrivateRoute>} />
                <Route path="/employees/:id" element={<PrivateRoute><EmployeeDetails /></PrivateRoute>} />
                
                {/* Default Route */}
                <Route path="/" element={<Navigate to="/employees" replace />} />
                
                {/* 404 Not Found Route */}
                <Route path="*" element={<Navigate to="/employees" replace />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Use the auth context to check if authenticated

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default App;
