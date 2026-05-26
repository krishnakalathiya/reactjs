import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { 
  fetchUsers, 
  deleteUserThunk, 
  setSearchTerm, 
  setSortOrder, 
  selectSortedAndFilteredUsers 
} from "./redux/userslice";

const ViewUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sortedData = useSelector(selectSortedAndFilteredUsers);
  const { searchTerm, sortOrder, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUserThunk(id));
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Search and Sort Control Top Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-neutral-primary-soft p-4 rounded-base border border-default">
        {/* Search Field */}
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sorting Dropdown Options */}
        <div className="w-full sm:w-48 flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium whitespace-nowrap">
            Sort by Name:
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => dispatch(setSortOrder(e.target.value))}
            className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Default</option>
            <option value="asc">Ascending (A-Z)</option>
            <option value="desc">Descending (Z-A)</option>
          </select>
        </div>
      </div>

      {loading && <p className="text-center py-4 text-blue-500 font-medium">Loading records...</p>}
      {error && <p className="text-center py-4 text-red-500 font-medium">Error: {error}</p>}

      {!loading && !error && (
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
                          onClick={() => handleDelete(u.id)}
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
      )}
    </div>
  );
};

export default ViewUser;