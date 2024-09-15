const express = require('express');
const cors = require('cors');
const sql = require('mssql');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// API route for Task2 data
app.get('/api/task2-data', async (req, res) => {
  try {
    let pool = await sql.connect(dbConfig);
    let result = await pool.request()
      .query('SELECT TOP 20 * FROM [SalesLT].[Customer]');
    res.json(result.recordset);
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API route for Task3 data
app.get('/api/task3-data', async (req, res) => {
  try {
    let pool = await sql.connect(dbConfig);
    let result = await pool.request()
      .query(`SELECT p.Name AS ProductName, p.Color, p.Size, p.Weight FROM [SalesLT].[Product] p JOIN [SalesLT].[ProductCategory] pc ON p.ProductCategoryID = pc.ProductCategoryID`);
    res.json(result.recordset);
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fallback route for serving React app (for all other routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
