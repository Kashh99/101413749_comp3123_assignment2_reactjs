import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.93 5.93m12.728 12.728 1.414-1.414M6.343 6.343 5.93 4.93m12.728 12.728L19.07 19.07M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" 
          />
        </svg>
      ) : (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" 
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;