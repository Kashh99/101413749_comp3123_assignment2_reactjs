import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../utils/api';

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await api.get(`/employees/${id}`);
        setEmployee(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch employee details');
        setLoading(false);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  const handleEdit = () => {
    navigate(`/employees/edit/${id}`);
  };

  const handleBack = () => {
    navigate('/employees');
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;
  if (!employee) return <div className="text-center py-10">No employee found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Employee Details
          </h1>
          <div className="space-x-3">
            <button 
              onClick={handleEdit}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Edit
            </button>
            <button 
              onClick={handleBack}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Back to List
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700">
          <dl>
            <div className="bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Full Name</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {employee.firstName} {employee.lastName}
              </dd>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {employee.email}
              </dd>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Phone Number</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {employee.phoneNumber}
              </dd>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Position</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {employee.position}
              </dd>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Salary</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                ${employee.salary.toLocaleString()}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;