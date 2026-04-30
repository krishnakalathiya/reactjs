import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from './componets/table';
import Search from './componets/search';
import Pagination from './componets/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc"); 
  const [currentPage, setCurrentPage] = useState(1); 
  const limit = 5; 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const filteredData = data.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    return sort === "asc" 
      ? a.name.localeCompare(b.name) 
      : b.name.localeCompare(a.name);
  });

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