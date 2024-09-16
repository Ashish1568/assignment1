import { useEffect, useState } from 'react';
import axios from 'axios';
import './Task2.css'
const Task2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    axios.get('http://localhost:5000/api/task2-data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Top 20 Customers</h1>
      <table>
        <thead>
          <tr>
            <th>CustomerID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>EmailAddress</th>
            {/* Add other columns as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map(customer => (
            <tr key={customer.CustomerID}>
              <td>{customer.CustomerID}</td>
              <td>{customer.FirstName}</td>
              <td>{customer.LastName}</td>
              <td>{customer.EmailAddress}</td>
              {/* Add other columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task2;
