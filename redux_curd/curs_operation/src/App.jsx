import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from './redux/userSlice';

function App() {
  const dispatch = useDispatch();
  const { list: users, loading, error } = useSelector((state) => state.users);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    if (editId) {
      dispatch(updateUser({ id: editId, updatedData: { name, email } }));
      setEditId(null);
    } else {
      dispatch(addUser({ id: Date.now().toString(), name, email }));
    }

    setName('');
    setEmail('');
  };

  const handleEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleCancel = () => {
    setEditId(null);
    setName('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-4xl mx-auto">
        
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Vite + Redux CRUD Dashboard</h1>
          <p className="mt-2 text-slate-500">Manage your network data instantly over Redux Toolkit Architecture.</p>
        </header>

        {/* Action Form Panel */}
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            {editId ? 'Modify Selected Record' : 'Register New User profile'}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Alex Carter"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Email address</label>
              <input
                type="email"
                placeholder="alex@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all cursor-pointer shadow-xs active:scale-[0.98]"
              >
                {editId ? 'Save Changes' : 'Create User'}
              </button>
              {editId && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-xl transition-all cursor-pointer"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Request Status Feedback signals */}
        {loading && (
          <div className="flex justify-center items-center p-8 text-slate-500 font-medium">
            Fetching runtime cluster objects...
          </div>
        )}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 font-medium text-center mb-6">
            Error handling system synchronization: {error}
          </div>
        )}

        {/* Reactive Workspace Spreadsheet */}
        {!loading && !error && (
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50/70">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Identified Name</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Email Endpoint</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">System Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="px-6 py-10 text-center text-sm text-slate-400 italic">
                      Zero users found. Fill out the application form above to add users.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                        <button
                          onClick={() => handleEdit(user)}
                          className="text-blue-600 hover:text-blue-900 cursor-pointer transition-colors"
                        >
                          Modify
                        </button>
                        <button
                          onClick={() => dispatch(deleteUser(user.id))}
                          className="text-red-500 hover:text-red-800 cursor-pointer transition-colors"
                        >
                          Revoke
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;