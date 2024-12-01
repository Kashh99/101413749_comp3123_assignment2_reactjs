import React, { useState, useEffect } from 'react';
import { getEmployees } from '../../services/employeeService';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id} className="mb-4 p-4 border rounded">
            <h3>{employee.first_name} {employee.last_name}</h3>
            <p>Position: {employee.position}</p>
            <p>Department: {employee.department}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
