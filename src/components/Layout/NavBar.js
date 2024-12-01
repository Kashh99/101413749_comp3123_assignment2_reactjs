import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Employee Management
              </span>
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              {isAuthenticated && (
                <>
                  <Link 
                    to="/employees" 
                    className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Employees
                  </Link>
                  <Link 
                    to="/employees/new" 
                    className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Add Employee
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
            {isAuthenticated ? (
              <div className="ml-4 flex items-center">
                <span className="mr-4 text-gray-600 dark:text-gray-300">
                  {user?.username || 'User'}
                </span>
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="ml-4 flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;