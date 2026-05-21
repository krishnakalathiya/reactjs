import React from 'react';

function Navbar({ user }) { 

  const firstLetter = user ? user.name.charAt(0).toUpperCase() : '';

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
      <h2 className="text-xl font-bold tracking-wide text-blue-400">My App</h2>
      
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg text-white border-2 border-blue-400 shadow-inner animate-fade-in">
              {firstLetter}
            </div>
            <span className="text-sm font-medium bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700">
              {user.name}
            </span>
          </>
        ) : (
          <span className="text-sm text-gray-400 italic">Guest User</span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;