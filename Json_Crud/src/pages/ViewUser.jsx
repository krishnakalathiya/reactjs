import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewUser = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // Stores "asc", "desc", or ""

  // Fetch all users
  const readUser = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Delete user and instantly update the local state
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      // Filter out the deleted user so the UI updates immediately
      setData(data.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    readUser();
  }, []);

  // 1. Filter data based on the search term (checks names and emails)
  const filteredData = data.filter((user) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      user.name?.toLowerCase().includes(searchLower) ||
      user.email?.toLowerCase().includes(searchLower)
    );
  });

  // 2. Sort the filtered data based on the chosen order (Ascending / Descending by Name)
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortOrder) return 0; // No sorting applied

    const nameA = a.name?.toLowerCase() || "";
    const nameB = b.name?.toLowerCase() || "";

    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else if (sortOrder === "desc") {
      return nameB.localeCompare(nameA);
    }
    return 0;
  });

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Search and Sort Controls Wrapper */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-neutral-primary-soft p-4 rounded-base border border-default">
        {/* Search Input */}
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="w-full sm:w-48 flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium whitespace-nowrap">
            Sort by Name:
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Default</option>
            <option value="asc">Ascending (A-Z)</option>
            <option value="desc">Descending (Z-A)</option>
          </select>
        </div>
      </div>

      {/* Table Container */}
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">Name</th>
              <th scope="col" className="px-6 py-3 font-medium">Email</th>
              <th scope="col" className="px-6 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((u) => (
                <tr key={u.id} className="bg-neutral-primary border-b border-default">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {u.name}
                  </th>
                  <td className="px-6 py-4">{u.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-4">
                      <button
                        className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                        onClick={() => navigate(`/edit/${u.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
                        onClick={() => deleteUser(u.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-8 text-gray-500">
                  No users found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUser;