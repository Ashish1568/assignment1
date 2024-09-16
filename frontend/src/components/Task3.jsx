import { useEffect, useState } from 'react';
import axios from 'axios';

const Task3 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    axios.get('http://localhost:5000/api/task3-data')
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
      <h1>Product Details</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Color</th>
            <th>Size</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={index}>
              <td>{product.ProductName}</td>
              <td>{product.Color}</td>
              <td>{product.Size}</td>
              <td>{product.Weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task3;
