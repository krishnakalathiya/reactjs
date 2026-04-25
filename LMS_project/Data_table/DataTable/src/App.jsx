import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from './componets/table';
import Search from './componets/search';
import Pagination from './componets/Pagination';

function App() {
  const [data, setData] = useState([]); // Original data [cite: 65]
  const [search, setSearch] = useState(""); // Search state [cite: 68]
  const [sort, setSort] = useState("asc"); // Sorting state [cite: 71]
  const [currentPage, setCurrentPage] = useState(1); // Pagination [cite: 76]
  const limit = 5; // 5 rows per page [cite: 49]

  // 1. Fetch Data from API [cite: 62, 64]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  // 2. Search Logic [cite: 67, 68, 69]
  const filteredData = data.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  // 3. Sorting Logic [cite: 70, 71, 73, 74]
  const sortedData = [...filteredData].sort((a, b) => {
    return sort === "asc" 
      ? a.name.localeCompare(b.name) 
      : b.name.localeCompare(a.name);
  });

  // 4. Pagination Logic [cite: 75, 76]
  const startIndex = (currentPage - 1) * limit;
  const paginatedData = sortedData.slice(startIndex, startIndex + limit);
  const totalPages = Math.ceil(sortedData.length / limit);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">Student Data Table Management</h2>
      
      <div className="card shadow p-4 bg-white rounded">
        <div className="d-flex justify-content-between mb-3 align-items-center">
          
          <Search setSearch={setSearch} setCurrentPage={setCurrentPage} />
          
         
          <select className="form-select w-25" onChange={(e) => setSort(e.target.value)}>
            <option value="asc">Sort A-Z [cite: 41]</option>
            <option value="desc">Sort Z-A [cite: 43]</option>
          </select>
        </div>

       
        <Table users={paginatedData} />

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          setCurrentPage={setCurrentPage} 
        />
      </div>
    </div>
  );
}

export default App;